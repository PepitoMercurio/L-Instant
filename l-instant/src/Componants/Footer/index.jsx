import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../Style/scss/Footer/style.scss";

const Footer = (props) => {
  // const [imageData, setImageData] = useState(null);

  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     setImageData(reader.result);
  //   };

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleImageSubmit = async () => {
  //   const date = new Date().toISOString();
  //   const likes = 0;

  //   const requestBody = {
  //     imageData,
  //     date,
  //     likes
  //   };

  //   try {
  //     const response = await fetch('http://localhost:3001/add/image', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(requestBody)
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to add image.');
  //     }

  //     console.log('Image ajoutée avec succès!');
  //   } catch (error) {
  //     console.error('Erreur lors de l\'ajout de l\'image:', error);
  //   }
  // };

  return (
    <div className="Footer">
      <div className="box">
      </div>
      <div className="button" onClick={props.Click}>
        <FontAwesomeIcon className="Footer-Button" icon={props.icon} />
      </div>
    </div>
  );
};

export default Footer;
