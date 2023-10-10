import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import './App.css';
import ImagePage from './Pages/Image';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<ImagePage />} />
      </Routes>
    </Router>
  );
}

export default App;