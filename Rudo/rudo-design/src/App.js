import './App.css';
import BannerSection from './BannerSection/BannerSection';
import Blade3 from './Blade3/Blade3';
import Blade4 from './Blade4/Blade4';
import MarqueeFooter from './components/MarqueeFooter/MarqueeFooter';
import Navbar from './components/Notification/Notification';
import HeroSection from './HeroSection/HeroSection';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <BannerSection />
      <Blade3 />
      <Blade4 />
      <MarqueeFooter />
    </div>
  );
}

export default App;
