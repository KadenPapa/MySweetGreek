import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'menu-page',
  template: `
    <h1>Our Baklava Menu</h1>

    <div class="cards">
      <div class="card">
        <div class="card-header">
          <h3>Full Size Party Tray</h3>
          <span class="right-text">$50</span>
        </div>

        <p>48 pieces of Baklava, perfect for any large gathering.</p>
      </div>

      <div class="card">
        <div class="card-header">
          <h3>Half Size Party Tray</h3>
          <span class="right-text">$30</span>
        </div>
        <p>24 pieces of Baklava, perfect for any medium sized event or gathering.</p>
      </div>

      <div class="card">
        <div class="card-header">
          <h3>Family Size Tray</h3>
          <span class="right-text">$18</span>
        </div>
        <p>12 pieces of Baklava, perfect for a get together of the ones closest to you.</p>
      </div>
      <div class="card">
        <div class="card-header">
          <h3>Personal Pack</h3>
          <span class="right-text">$8</span>
        </div>
          <p>4 pieces of baklava, for one that wants a sweet treat</p>
      </div>
    </div>
  `,
  styles: [`
    .cards { display: flex; gap: 20px; flex-wrap: wrap; }
    .card {
      width: 75%;
      background: white;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 3px 10px rgba(0,0,0,0.08);
    }
    .card-header {
  display: flex;
  justify-content: space-between;  /* left + right split */
  align-items: center;
}

.right-text {
  font-weight: bold;
  font-size: 1.2rem;
}

  `]
})
export class MenuPage {}
