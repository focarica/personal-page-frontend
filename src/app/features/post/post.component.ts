import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-post-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './post.html',
})
export class PostPageComponent implements OnInit{

  private httpService = inject(HttpService)

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit(): void {
  }

}
