import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './Component/Store/ContextProvider';
import Header from './Component/Header/Header';
import List from './Component/Header/List';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './Component/Footer/Footer';
import About from './Component/Pages/About';
import Home from './Component/Pages/Home';
import ContactUs from './Component/Pages/ContactUs';
import ProductPage from './Component/ProductPage';
import Login from './Component/Pages/Login';



function App() {
  return (
    <ContextProvider>
      <Router>
      <Header />
    
      <Routes>
          <Route path="/" element={<List />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product/:productId" element={<ProductPage />} />     
        </Routes>
      <Footer/>
      </Router>
    </ContextProvider>
  );
}

export default App;
