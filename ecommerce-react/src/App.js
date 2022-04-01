import './App.css';
import NavBar from './components/NavBar/NavBar'
import Cards from './components/Cards/Cards'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Cards/>
      <ItemDetailContainer/> 
    </div>
  );
}

export default App;
