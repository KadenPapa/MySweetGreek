import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="home">
      <img src="assets/Logo-Main.png" alt="MySweetGreek Logo" class="home-logo" />
     </section>
    
    <section class="hero">
      <img src="assets/Baklava.jpg" alt="Delicious Baklava" class="hero-img" />
      <div class="hero-text">
        <h1>Fresh, Authentic Greek Baklava</h1>
        <p>Handmade with premium ingredients.</p>
        <a class="hero-button" href="https://forms.gle/your-order-form" target="_blank">
          Order Now
        </a>
      </div>
    </section>
  `,
  styles: [`
    .home {
        text-align: center;
        padding: 40px 20px;
    }
    .home-logo {
        width : 250px;
        max-width: 80%;
        margin-bottom: 20px;
    }
    .hero {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      padding: 60px 20px;
    }

    .hero-img {
      width: 350px;
      max-width: 90%;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }

    .hero-text {
      max-width: 500px;
    }

    .hero-text h1 {
      font-size: 2.6rem;
      color: #0D5EAF;
      margin-bottom: 10px;
    }

    .hero-text p {
      font-size: 1.2rem;
      margin-bottom: 20px;
    }

    .hero-button {
      padding: 12px 24px;
      background: #0D5EAF;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: bold;
    }

    .hero-button:hover {
      background: #08488a;
    }
  `],
})
export class HomePage {}
