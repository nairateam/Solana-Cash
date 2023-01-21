import './App.css';
import Blockchain from './Sections/Blockchain';
import Chart from './Sections/Chart';
import Dapp from './Sections/Dapp';
import Ecosystem from './Sections/Ecosystem';
import Features from './Sections/Features';
import Footer from './Sections/Footer';
import Hero from './Sections/Hero';
import Media from './Sections/Media';
import Nav from './Sections/Nav';
import Partners from './Sections/Partners';
import Roadmap from './Sections/Roadmap';
import Tokenomics from './Sections/Tokenomics';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Features />
      <Dapp />
      <Blockchain />
      <Chart />
      <Media />
      <Ecosystem />
      <Roadmap />
      <Tokenomics />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
