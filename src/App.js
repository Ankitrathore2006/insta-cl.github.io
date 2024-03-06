// import logo from './logo.svg';
import './App.css';
import Head from './Components/head.js';
import Homep from './Components/Homep.js';

function App() {
  return (
    <section className="home">
      <Head/>
      <div className="page">
        <Homep/>
      </div>
    </section>
  );
}

export default App;
