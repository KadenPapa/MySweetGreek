import { Routes } from '@angular/router';
import { HomePage } from './pages/home.page';
import { MenuPage } from './pages/menu.page';
import { AboutPage } from './pages/about.page';
import { ContactPage } from './pages/contact.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'menu', component: MenuPage },
  { path: 'about', component: AboutPage },
  { path: 'contact', component: ContactPage },
  { path: '**', redirectTo: '' },
];
