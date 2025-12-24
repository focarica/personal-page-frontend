import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, } from '@angular/router';
import { HttpService } from '../../http.service';
import { Post } from '../../shared/models/Post';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-post-page',
  imports: [CommonModule, RouterModule, MarkdownComponent],
  templateUrl: './post.html',
})
export class PostPageComponent implements OnInit{

  private httpService = inject(HttpService)
  private location = inject(Location);
  private sub?: Subscription;
  
  post = signal<Post | null>(null);

  constructor(private router: Router, private route: ActivatedRoute) {
  }
  
  navigate(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.getPost(id);
      }
    });
  }

  goBack() {
    this.location.back();
  } 

  getPost(id: string){
    this.httpService.findPost(id).subscribe(
      response => {
        this.post.set(response)
      }
    )
  }
}
