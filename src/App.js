import './App.css';
import { HeaderMain } from './Components/Header/HeaderMain';
import { AboutUs } from './Components/AboutUs/AboutUs';
import { OurServices } from './Components/OurServices/OurServices';
import { Footer } from './Components/Footer/Footer';
import BackToTop from './Components/BackToTop/BackToTop';


function App() {
  return (
    <div className="App">
<HeaderMain/>
<div id="about-us">
<AboutUs/>
</div>
<div id="our-services">
        <OurServices />
      </div>
      <div id="contacts">
        <Footer />
      </div>
      <BackToTop/>
    </div>
  );
}

export default App;
