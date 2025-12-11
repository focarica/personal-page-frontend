import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  navItems: NavItem[] = [
    { label: 'Home', route: '/home' },
    { label: 'CV', route: '/cv' },
    { label: 'find me', route: '/find-me' },
    { label: 'about', route: '/about' }
  ];

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
