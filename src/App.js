import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './Component/Store/ContextProvider';
import Header from './Component/Header/Header';
import List from './Component/Header/List';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './Component/Footer/Footer';
import About from './Component/About';
import Home from './Component/Home';




function App() {
  return (
    <ContextProvider>
      <Router>
      <Header />
    
      <Routes>
          <Route path="/" element={<List />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer/>
      </Router>
    </ContextProvider>
  );
}

export default App;
