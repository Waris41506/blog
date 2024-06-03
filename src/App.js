import './App.css';
import Footer from './components/Footer/Footer';
import Navber from './components/Navber/Navber';
import Home from './components/Pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Fashion from './components/Pages/Fashion';
import Movies from './components/Pages/Movies';
import Electronic from './components/Pages/Electronic';
import Cricket from './components/Pages/Cricket';
import Technology from './components/Pages/Technology';
import PageNotFound from './components/Pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navber/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/fashion' element={<Fashion/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/electronic' element={<Electronic/>}/>
          <Route path='/cricket' element={<Cricket/>}/>
          <Route path='/technology' element={<Technology/>}/>
          <Route path='*' element={<PageNotFound/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
