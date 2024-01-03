import {createBrowserRouter} from 'react-router-dom';
import { ContextProvider } from './Component/Store/ContextProvider';
import Header from './Component/Header/Header';
import List from './Component/Header/List';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './Component/Footer/Footer';
import About from './Component/About';
import { RouterProvider } from 'react-router';


const router = createBrowserRouter([
  {path: '/about',element:<About/>},

])
function App() {
  return (
    <ContextProvider>
       <RouterProvider router={router}>
      <Header />
      <List />
      <Footer/>
      </RouterProvider> 
    </ContextProvider>
  );
}

export default App;
