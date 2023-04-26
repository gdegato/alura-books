import './App.css';
import IconesHeader from './components/IconesHeader';
import Logo from './components/Logo';
import OpcoesHeader from './components/OpcoesHeader';



function App() {



  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <OpcoesHeader />
        <IconesHeader />

      </header>
    </div>
  );
}

export default App;
