import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Rectangle1 from './components/Rectangle1';
import CarouselPage from './pages/CarouselPage';
import Footer from './components/Footer';
import Rectangle2 from './components/Rectangle2';
import Uses from './pages/Uses';
import Features from './pages/Features';
import Pentagon from './components/Pentagon';
import Reviews from './pages/Reviews';
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init();

function App() {
  return (
    <div className="App" style={{'overflow-x' : 'hidden'}}>
      <Navbar />
      <Landing />
      <Rectangle1 />
      <CarouselPage />
      <Rectangle2 />
      <Uses />
      <Features />
      <Pentagon />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
