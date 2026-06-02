import { Menu } from './routes/Menu/Menu';
import { Home } from './routes/Home/Home';
import { Projects } from './routes/Projects/Projects';
import { Skills } from './routes/Skills/Skills';
import { Footer } from './routes/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Menu />
      <main className="app__main">
        <Home />
        <Projects />
        <Skills />
      </main>
      <Footer />
      <p className="app__credit">Crafted by Clarks</p>
    </div>
  );
}

export default App;
