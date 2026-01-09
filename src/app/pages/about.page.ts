import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'about-page',
  template: `
    <h1>Ready to enjoy some delicious Baklava?</h1>
    <p>

    </p>
        <div class="cta-section">
      <h2>Reserve your order for your next get together</h2>
      <p>Once you place your reservation you will receive a confirmation on your order within 48 hours of placement. Any orders for an event less than 48 hours away may be rejected.</p>

      <a
        href="https://forms.gle/ANzPWLD7vv8QVAeM9"
        target="_blank"
        rel="noopener"
        class="form-button"
      >
        Fill Out Our Form
      </a>
    </div>
  `,
  styles: [`
        .cta-section {
      margin-top: 40px;
      padding: 25px;
      background: #fff3e0;
      border-radius: 16px;
      text-align: center;
    }

    .form-button {
      display: inline-block;
      background: #0D5EAF;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: bold;
      margin-top: 10px;
    }

    .form-button:hover {
      background: #ffffff;
      color: #0D5EAF;
    }
    `]
})
export class AboutPage {}
