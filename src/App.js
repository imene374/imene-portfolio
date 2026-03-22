import './App.css';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      {/* هنا سنضع كل الـ Sections الخاصة بنا */}
      <nav className="navbar">
        <h1>Imene Portfolio</h1>
      </nav>

      <header className="hero-section">
        <h2>YAHIAOUI IMENE</h2>
        <p>Master 1 HPC Student | Full-stack Developer</p>
      </header>
      <About />  {/* appeler le code de fichier About ici   */}
      <Services />
      <Projects />
      <Contact  />
    </div>
  );
}

export default App;