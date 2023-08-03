import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Highlights from './Components/Highlights';
import Features from './Components/Features';
import logo from './Components/img/Cake Delights (1).png'
import headerPic from './Components/img/undraw_birthday_cake_re_bsw5.svg'
import topWave  from "./Components/img/topwave.svg"
import bottomWave from "./Components/img/bottom-svgbetter.svg"
function App() {
  return (
    <div className="App">
    <section id='landing'>
      <Nav logo={logo} />
    <Header headerPic={headerPic}/>
    </section>
    <main>
    <div>
    <div className='wave_container'>
    <div id='top_wave'>
    <img  className='wave-img' src={topWave}/>
    </div>
    </div>
    <Highlights />
    <div className='wave_container'>
    <div id='bottom_wave'>
    <img  src={bottomWave}/>
    </div>
      </div>
    </div>
    
    <Features />
    </main>
    </div>
  );
}

export default App;
