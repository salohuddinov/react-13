import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import SingleProduct from './pages/singleproduct/SingleProduct'
import About from './pages/about/About'
import Wishlist from './pages/wishlist/Wishlist'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path='/about' element={<About />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
