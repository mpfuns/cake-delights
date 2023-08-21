import './App.css';
//Comps
import Nav from './Components/Nav';
import Header from './Components/Header';
import Highlights from './Components/Highlights';
import Features from './Components/Features';
import Latest from './Components/Latest';
//images
import logo from './Components/img/Cake Delights (1).png'
import headerPic from './Components/img/undraw_birthday_cake_re_bsw5.svg'
import topWave  from "./Components/img/topwave.svg"
import bottomWave from "./Components/img/bottom-svgbetter.svg"
//data
import dataSeller from "./data-seller"
import dataLast from "./data-lastest"


function App() {
  return (
    <div className="App">
    <section id='landing'>
      <Nav logo={logo} />
    <Header headerPic={headerPic}/>
    </section>
    <main>
    <div id="both_wave">
    <div id='top_wave' >
    <div className='wave_container' >
    <img  className='wave-img' src={topWave}/>
    </div>
    </div>
    <Highlights />
    <div id='bottom_wave' >
    <div className='wave_container' >
    <img  src={bottomWave}/>
    </div>
      </div>
    </div>
    <Features data={dataSeller} />
    <Latest data={dataLast}/>
    </main>
    </div>
  );
}

export default App;
