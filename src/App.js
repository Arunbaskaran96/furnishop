
import './App.css';
import Categories from './components/Categories/Categories';
import Contact from './components/Contact/Contact';
import Discount from './components/Discount/Discount';
import Fourth from './components/Fourth/Fourth';
import Reviews from './components/Reviews/Reviews';
import Third from './components/Third/Third';
import Home from './components/home/Home';
import Topbar from './components/topbar/Topbar';



function App() {
  return (
    <div>
      <Topbar/>
      <Home/>
      <Categories/>
      <Third/>
      <Fourth/>
      <Reviews/>
      <Discount/>
      <Contact/>
    </div>

  );
}

export default App;
