
import './App.css';
import './styles/bootstrap.css';
import './styles/style.css';
import Navbar from './components/Navbar';
import SliderContainer from './components/SliderContainer';
import YouTubePlaylist from './components/YoutubePlaylist';
import AppleWatch from './components/AppleWatch';
import Footer from './components/Footer';
import IphoneBanner from './components/IphoneBanner';
import IphoneCards from './components/IphoneCards';
import TradeCard from './components/TradeCard';
import AppleEvent from './components/AppleEvent';
import Description from './components/Description';
import Informations from './components/Informations';


function App() {
  return (
    <div className='App'>
   <Navbar />
   <AppleEvent />
   <IphoneBanner />
   <IphoneCards />
   <AppleWatch />
   <TradeCard />
   <YouTubePlaylist />
<SliderContainer /> 
<Description />
<Informations />
<Footer />
    </div>
  );
}

export default App;
