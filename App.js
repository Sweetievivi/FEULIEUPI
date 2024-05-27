import './App.css';
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import Home from './Home/home';
import Us from './Us/us';
import Game from './Game/game';
import Forms from './Forms/form';

function App() {
  return (
    <div className="App">
        <header className="App-header">
        <Navbar/>
        <Home/>
        <Footer/>
        </header>
    </div>
  );
}

export default App;