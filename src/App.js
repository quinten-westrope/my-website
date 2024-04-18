import logo from './logo.svg';
import './App.css';
import MediaCard from './components/MediaCard';
import Bio from './components/Bio';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MediaCard />
      <Bio />
    </div>
  );
}

export default App;
