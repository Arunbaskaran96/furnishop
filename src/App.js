
import './App.css';
import Topbar from './components/topbar/Topbar';
import Home from './components/home/Home';
import Categories from './components/Categories/Categories';
import Third from './components/Third/Third';
import Fourth from './components/Fourth/Fourth';
import Reviews from './components/Reviews/Reviews';
import Discount from './components/Discount/Discount';
import Contact from './components/Contact/Contact';

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
