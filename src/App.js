import Header from './components/Header';
import Home from './components/Home';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1 hidden>Portfolio Marion Barthoux</h1>
        <Home />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;