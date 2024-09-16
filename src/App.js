
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Catalog></Catalog>
      <About></About>

      <Footer></Footer>
    </div>
  );
}

export default App;
