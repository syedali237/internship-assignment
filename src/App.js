import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Rectangle1 from './components/Rectangle1';
import CarouselPage from './pages/CarouselPage';
import Footer from './components/Footer';
import Rectangle2 from './components/Rectangle2';
import Uses from './pages/Uses';
import Features from './pages/Features';
import ComparisonTable from './pages/ComparisonPage';
import Reviews from './pages/Reviews';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Rectangle1 />
      <CarouselPage />
      <Rectangle2 />
      <Uses />
      <Features />
      <ComparisonTable />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
