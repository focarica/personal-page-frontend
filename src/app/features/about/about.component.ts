import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';

@Component({
  selector: 'app-about-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
})
export class AboutPageComponent implements OnInit{

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit(): void {
  }

}
