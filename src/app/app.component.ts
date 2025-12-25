import { Component, inject } from '@angular/core';
import {  RouterModule, } from '@angular/router';
import { NavBarComponent } from './shared/components/navbar/navbar.component';

interface NavItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavBarComponent],
  template: `
  <div class="app-root">
    <app-navbar />
    <main class="app-main">
      <router-outlet />
    </main>
  </div>
  `
})
export class App {}
