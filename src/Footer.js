import logo2 from './Logo2.png'
import './index.css';

function Footer() {
    return (
    <footer>
        <img src={logo2} alt="Little Lemon Logo"/>
      <div>
        <h2>Navigation</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
      </div>
      <div>
        <h2>Contact</h2>
          <ul>
            <li><a>Address</a></li>
            <li><a>Phone Number</a></li>
            <li><a>Email</a></li>
          </ul>
      </div>
      <div>
        <h2>Social Media</h2>
          <ul>
            <li><a href="">Instagram</a></li>
            <li><a href="">Facebook</a></li>
            <li><a href="">Twitter</a></li>
          </ul>
      </div>

    </footer>
  )
}

export default Footer;