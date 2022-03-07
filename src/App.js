import logo from './logo.svg';
import './App.css';

import useFetch from './customHooks/useFetch';
import TestFetchHook from './TestFetchHook';

function App() {

  const BASH_URL = 'https://inshortsapi.vercel.app/news?category=science';

  const {data, loading, error} = useFetch(BASH_URL);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100px" />
        <p className='author'>Dharanitharan M</p>
        <p >React Custom Hook - Data Fetch</p>
      </header>
      <h2>Custom fetch hook - Science</h2>
      <br/>
      Total length : {loading && 'loading...'}
      <br/>
      {data.length}
      <br/>
      {error && 'Error'}
      <div>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </div>
      <hr/>
      <TestFetchHook/>
    </div>
  );
}

export default App;
