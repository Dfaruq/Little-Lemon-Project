import './index.css';
import heroImage from './hero-image.jpg';

function Main() {
    return (
    <main>
      <div id="hero">
       <div className='hero-text'>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="reserve-button">Reserve a Table</button>
       </div>
        <img src={heroImage} alt="A plate of appetisers" className='hero-image'/>
      </div>
      <div id="specials">
        <h3>Specials</h3>
      </div>
      <div id="testimonials">
        <h3>Testimonials</h3>
      </div>
      <div id="about">
      <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Little Lemon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials</p>
      </div>
    </main>
  )
}

export default Main;