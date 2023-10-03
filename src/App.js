import logo from './logo.svg';
import './App.css';
import Header from './pages/Header/Header';
import Ticket from './pages/Ticket/Ticket';
import GameInfo from './pages/GameInfo/GameInfo';
import Banner from './pages/Banner/Banner';
import GameStart from './pages/GameStart/GameStart';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Banner />
      <GameStart />
      <Ticket />
    </div>
  );
}

export default App;
