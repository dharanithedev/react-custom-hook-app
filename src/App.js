import logo from './logo.svg';
import './App.css';
import TestFetchHook from './TestFetchHook';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100px" />
        <p>React Custom Hook - Test</p>
      </header>
      <TestFetchHook/>
    </div>
  );
}

export default App;
