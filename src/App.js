import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Highlights from './Components/Highlights';
import Features from './Components/Features';
import logo from './Components/img/Cake Delights (1).png'
import headerPic from './Components/img/undraw_birthday_cake_re_bsw5.svg'
function App() {
  return (
    <div className="App">
    <section id='landing'>
      <Nav logo={logo} />
    <Header headerPic={headerPic}/>
    </section>
    <main>
    <Highlights />
    <Features />
    </main>
    </div>
  );
}

export default App;
