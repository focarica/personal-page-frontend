import { Component, inject } from '@angular/core';
import {  RouterModule, } from '@angular/router';
import { NavBarComponent } from './shared/components/navbar/navbar.component';
import { HomePageComponent } from "./features/home/home.component";

interface NavItem {
  label: string;
  route: string;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavBarComponent],
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  `
})
export class App {}
