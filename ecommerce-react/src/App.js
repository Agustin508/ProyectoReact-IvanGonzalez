import './App.css';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import HomePage from './pages/Home';
import ContactPage from './pages/Contact'
import ProductsPage from './pages/Products';
import DetailPage from './pages/Detail';
import CartWidgetPage from './pages/CartWidgetPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:category/' element={<HomePage/>}/>
        <Route path='/Contacto' element={<ContactPage/>}/>
        <Route path='/Products' element={<ProductsPage/>}/>
        <Route path='/Detail/:id' element={<DetailPage/>}/>
        <Route path='/Cart' element={<CartWidgetPage/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
