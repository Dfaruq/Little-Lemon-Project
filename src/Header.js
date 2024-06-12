import { Route } from 'react-router-dom';
import logo from './Logo1.png'; 
import './index.css';
import Booking from './Booking';
import About from './About';
import Menu from './Menu';
import Order from './Order';
import Login from './Login';

function Header() {
    return (
    <header>
        <img src={logo} alt="Little Lemon Logo"/>
        <nav>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
    <Routes>
        <Route path="/home" element={<App/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/reservations" element={<Booking/>}></Route>
        <Route path="/order-online" element={<Order/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </header>
  )
} 

export default Header;