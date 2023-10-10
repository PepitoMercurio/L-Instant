import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import path from 'path';
import fs from 'fs/promises';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));


const db = new sqlite3.Database('database.db');

app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/image/:filename', (req, res) => {
  const { filename } = req.params;
  res.sendFile(path.join(__dirname, 'images', filename));
});

app.get('/getImage', (req, res) => {
    const query = 'SELECT * FROM image ORDER BY id DESC';
  
    db.all(query, (err, rows) => {
      if (err) {
        return res.status(500).send(err.message);
      }
  
      res.json(rows);
    });
});

app.get('/mostLiked', (req, res) => {
    const query = 'SELECT * FROM image ORDER BY likes DESC LIMIT 5';
  
    db.all(query, (err, rows) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.json(rows);
    });
});

app.get('/getImage/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM image WHERE id = ?';
  
    db.get(query, [id], (err, row) => {
      if (err) {
        return res.status(500).send(err.message);
      }
  
      if (!row) {
        return res.status(404).send('Image non trouvée.');
      }
  
      res.json(row);
    });
  });

  app.get('/download/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const filePath = path.join(__dirname, 'images', imageName);
    res.download(filePath);
  });
  

// app.post('/add/image', (req, res) => {
//   const { imageData, date, likes } = req.body;

//   const fileName = 'image.png';

//   const filePath = `images/${fileName}`;

//   fs.writeFile(filePath, imageData, 'base64', (err) => {
//     if (err) {
//       return res.status(500).send(err.message);
//     }

//     const query = `INSERT INTO image (image, date, likes) VALUES (?, ?, ?)`;

//     db.run(query, [filePath, date, likes], (dbErr) => {
//       if (dbErr) {
//         return res.status(500).send(dbErr.message);
//       }

//       res.send('Image ajoutée avec succès!');
//     });
//   });
// });


app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
