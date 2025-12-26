import { CommonModule } from '@angular/common';
import {signal} from '@angular/core';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { PostHeaders } from '../../shared/models/PostHeaders';
import { HttpService } from '../../http.service';
import { finalize, Observable, take } from 'rxjs';
@Component({
  selector: 'app-home-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
})
export class HomePageComponent implements OnInit{

  private httpService = inject(HttpService)

  postsSummary = signal<PostHeaders[]>([])
  hasError = signal<boolean>(false)
  isLoading = signal<boolean>(false);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getAllPosts()
  }
  
  navigate(route: string): void {
    this.router.navigate([route]);
  }

  getAllPosts() {
    this.isLoading.set(true)

    this.httpService.findAllPostsSummaryOrdered()
      .pipe(
        finalize(() => { 
          setTimeout(() => {
            this.isLoading.set(false) 
          }, 300); // pro feedback de usuario que foi tentatdo o novo request
        })
      )
      .subscribe({
        next: posts => {
          this.postsSummary.set(posts);
          this.hasError.set(false) // so pra ter certeza que nao vai dar erro
        },
        error: () => {
          this.postsSummary.set([]);
          this.hasError.set(true);
        }
    });
  }
}
