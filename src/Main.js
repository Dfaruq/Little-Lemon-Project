import './index.css';
import heroImage from './hero-image.jpg';
import Falafel from './falafel.jpeg';
import Mousska from './moussaka.jpeg';
import Souvlaki from './souvlaki.jpeg';
import User from './User.png'

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
      <div id="special-heading">
      <h3>Specials</h3>
        <button class="order-button">Order Online</button>
      </div>
      <div id="special">
          < div class="special">
          <img src={Souvlaki} alt="Chicken Souvlaki" class="card-img"/>
          <h4 class="special-title">Chicken Souvlaki</h4>
          <p class="special-text">Tender grilled chicken skewers marinated in a blend of Mediterranean spices, served with a side of tzatziki sauce, pita bread, and a refreshing cucumber salad.</p>
        </div>
        <div class="special">
          <img src={Falafel} alt="Falafel Platter" class="card-img"/>
          <h4 class="special-title">Falafel Platter</h4>
          <p class="special-text">Crispy, golden-brown falafel balls served with a green chilli and tahini sauces, fresh tabbouleh salad, and a side of hummus with pita wedges.</p>
        </div>
        <div class="special">
          <img src={Mousska} alt="Moussaka" class="card-img"/>
          <h4 class="special-title">Moussaka</h4>
          <p class="special-text">A classic Greek casserole layered with eggplant, seasoned ground beef, and potatoes, topped with a creamy béchamel sauce and baked to perfection.</p>
        </div>
      </div>
      <div id="testimonials">
        <h3>Testimonials</h3>
        <div class="testimonial-container">
    <div class="testimonial">
      <div class="testimonial-header">
        <div class="title-container">
          <h4 class="testimonial-title">Great Service!</h4>
        </div>
        <div class="user-info">
          <img src={User} alt="User 1" class="testimonial-img"/>
          <span class="username">Finn</span>
        </div>
      </div>
      <div class="testimonial-content">
        <h5>Highly Recommend</h5>
        <p>The service was fantastic and the food was delicious! Definitely coming back.</p>
      </div>
    </div>
    <div class="testimonial">
      <div class="testimonial-header">
        <div class="title-container">
          <h4 class="testimonial-title">Amazing Food!</h4>
        </div>
        <div class="user-info">
          <img src={User} alt="User 2" class="testimonial-img"/>
          <span class="username">Ali</span>
        </div>
      </div>
      <div class="testimonial-content">
        <h5>Best Mediterranean Cuisine</h5>
        <p>The best Mediterranean food I've ever had. The flavors were authentic and fresh.</p>
      </div>
    </div>
    <div class="testimonial">
      <div class="testimonial-header">
        <div class="title-container">
          <h4 class="testimonial-title">Excellent Atmosphere!</h4>
        </div>
        <div class="user-info">
          <img src={User} alt="User 3" class="testimonial-img"/>
          <span class="username">Claudia</span>
        </div>
      </div>
      <div class="testimonial-content">
        <h5>Lovely Place</h5>
        <p>The ambiance is perfect for a relaxing evening. Loved the decor and the service.</p>
      </div>
    </div>
  </div>
  
      </div>
      <div id="about">
      <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Little Lemon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
      </div>
    </main>
  )
}

export default Main;