
import {Routes,Route} from 'react-router-dom'
import './App.css'
import './index.css'
import Nav from './Components/nav/nav';
import Home from './Components/Pages/Home';
import Explore from './Components/Pages/Explore';
import Contact from './Components/Pages/Contact';
import Cart from './Components/Pages/cart';
import Flipcard from './Components/Pages/flipcard';
import Shop from './Components/Pages/shop';
function App() {
  return (
    <>
  <div>
    <Nav />
    <Routes>
<Route path='/' element={<Home/>} /> 
<Route path='/explore' element={<Explore/>} /> 
<Route path='/contact' element={<Contact/>} />  
<Route path='/cart' element={<Cart />} /> 
<Route path='/flipcard' element={<Flipcard/>} /> 
<Route path='/shop' element={<Shop  />} /> 
    </Routes>
  </div>
    </>
  ); 
}

export default App
