import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/cards';
import Nav from './components/Nav';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<BlogIndex />} />
        <Route path="/journal/:slug" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default App;
