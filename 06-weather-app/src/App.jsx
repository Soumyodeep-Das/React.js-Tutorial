import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import SearchButton from './components/SearchButton';
import ResultCard from './components/ResultCard';

function App() {
  return (
    <div className="container">
      <NavBar />
      <SearchBar />
      <SearchButton />
      <ResultCard />
    </div>
  );
}

export default App;
