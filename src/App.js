import Header from './components/Header';
import Home from './components/Home';
import Stack from './components/Stack';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1 hidden>Portfolio Marion Barthoux</h1>
        <Home />
        <Stack />
      </main>
    </div>
  );
}

export default App;