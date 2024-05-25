import './App.css';
import Menu from './routes/Menu/Menu';
import Home from './routes/Home/Home';
import Features from './routes/Features/Features';
import Proyects from './routes/Pricing/Poyects';
import Footer from './routes/Footer/Footer';
function App() {
  return (
    <div>
      <div className="Menu-nav">
        <Menu></Menu>
      </div>
      <main>
        <br></br>
        <Home></Home>
        <Proyects></Proyects>
        <Features></Features>
      </main>
      <div>
        <Footer></Footer>
      </div>
      <p className="c">Crafted by Clarks</p>
    </div>
  );
}

export default App;
