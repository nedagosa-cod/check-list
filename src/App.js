import Check from './components/Check';
import ChecksLeft from './components/CheckList';

const App = () => {
  return (
    <div className="App">
      <main className='container'>
        <h1 className='container__h1'>Titulo del proceso</h1>
        <ChecksLeft/>
      </main>
    </div>
  );
}

export default App;
