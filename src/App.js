import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Headers from './Components/Header';
import Footers from './Components/Footer';
import { useState } from 'react';
import Home from './screens/Home';
import Articles from './screens/Articles';
import ViewArticles from './screens/ViewArticles';
import Books from './screens/Books';
import Stories from './screens/Stories';
import ViewStory from './screens/ViewStory';
import Proses from './screens/Proses';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <Router className="min-h-screen">
        <Headers showPopup={showPopup} setShowPopup={setShowPopup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles/>} />
          <Route path="/story" element={<Stories/>} />
          <Route path="/books" element={<Books/>} />
          <Route path="/quotes" element={<Proses/>} />
          <Route path="/articles/:id" element={<ViewArticles />} />
          <Route path="/story/:id" element={<ViewStory />} />
        </Routes>
        <Footers showPopup={showPopup} setShowPopup={setShowPopup} />
    </Router>
  );
}

export default App;
