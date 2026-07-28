import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-about-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
})
export class AboutPageComponent implements OnInit{

  private seo = inject(SeoService)

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit(): void {
    this.seo.setPage('About — Artur Sousa', 'Software engineering student, backend developer, and systems enthusiast.', '/about');
  }

}
