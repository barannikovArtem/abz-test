import Header from './components/Header';
import CardList from './components/CardList';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main className='app__main'>
        <CardList />
      </main>
    </div>
  );
}

export default App;
