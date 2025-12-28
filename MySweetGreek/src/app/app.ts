import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="nav">
      <div class="nav-left">
      <img src="assets/SG-Corner.png" class="logo" />
    </div>
    <div class="nav-center">
      <a routerLink="">Home</a>
      <a routerLink="menu">Menu</a>
      <a routerLink="about">Order Here</a>
      <a routerLink="contact">Contact</a>
    </div>
    <div class="nav-right"></div>
    </nav>

    <main>
      <router-outlet />
    </main>

    <footer class="footer">
      © {{ currentYear }} MySweetGreek — Handcrafted with Love
    </footer>
  `,
  styles: [`
    .nav {
      display: flex;
      align-items:center;
      justify-content: space-between;
      padding: 20px;
      background: #0D5EAF;
      font-size: 1.2rem;
    }
    .nav-left,
    .nav-right{
      flex: 1;
    }
    .nav-center {
      flex: 5;
      display: flex;
      justify-content: center;
      gap: 40px;
    }
    .nav a {
      text-decoration: none;
      color: #ffffff;
      font-weight: bold;
      flex: 3;
    }
    .nav a:hover {
      text-decoration: underline;
    }
    .logo{
      max-height: 50px; 
      width: auto;
    }
    main {
      padding: 20px;
    }
    .footer {
      margin-top: 40px;
      text-align: center;
      padding: 20px;
      color: #0D5EAF;
    }
  `],
})
export class App {
  currentYear = new Date().getFullYear();
}
