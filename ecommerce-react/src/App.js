import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer name='Fate eximia' measure='195/55/15'  />
      <ItemListContainer name='Fate AR-35' measure='195/55/15' />

    </div>
  );
}

export default App;
