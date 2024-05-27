import logo2 from './Logo2.png'
function Footer() {
    return (
    <footer>
        <img src={logo2} alt="Little Lemon Logo"/>
        <h2>Navigation</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        <h2>Contact</h2>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        <h2>Social Media</h2>
          <ul>
            <li><a href="">Instagram</a></li>
            <li><a href="">Facebook</a></li>
            <li><a href="">Twitter</a></li>
          </ul>

    </footer>
  )
} 

export default Footer;