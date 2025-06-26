import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import women_banner from './Components/assets/banner_women.png'
import mens_banner from './Components/assets/banner_mens.png'
import kids_banner from './Components/assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner}category="womens" />} />
          <Route path='/mens' element={<ShopCategory banner={mens_banner} category="mens" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner}category="kids" />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;



