import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog"
import About from "./pages/About";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import '@fortawesome/fontawesome-free/css/all.min.css';
import GlobalProvider from "./state/GlobalProvider";

function App() {
  return (

    <GlobalProvider>

        <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/catalog" element={<Catalog></Catalog>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/admin" element={<Admin></Admin>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>


        <Footer></Footer>
      </div>
    </BrowserRouter>
    </GlobalProvider>
  
  );
}

export default App;
