import './App.css'
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Slider from './components/Slider/Slider';
import Sell from './components/Sell/Sell';
import AllProducts from './components/AllProducts/AllProducts';
import Top from './components/Top/Top';
import Fashion from './components/Fashion/Fashion';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';

const App = () => {
  return (
    <div>
        <Header />
        <Menu />
        <Slider />
        <Top />
        <Sell />
        <AllProducts />
        <Fashion />
        <Footer />
        <Copyright />
    </div>
  );
};

export default App;