import { CommonModule } from '@angular/common';
import {signal} from '@angular/core';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { PostHeaders } from '../../shared/models/PostHeaders';
import { HttpService } from '../../http.service';
@Component({
  selector: 'app-home-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
})
export class HomePageComponent implements OnInit{

  private httpService = inject(HttpService)

  postsSummary = signal<PostHeaders[]>([])

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getAllPosts()
  }
  
  navigate(route: string): void {
    this.router.navigate([route]);
  }


  getAllPosts(){
    this.httpService.findAllPostsSummaryOrdered().subscribe(
      response => {
        this.postsSummary.set(response)
      }
    )
  }
}
