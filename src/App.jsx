import Header from './components/Header';
import CardList from './components/CardList';

import './App.scss';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="app">
      <Header />
      <main className='app__main'>
        <CardList />
        <RegisterForm />
      </main>
    </div>
  );
}

export default App;
