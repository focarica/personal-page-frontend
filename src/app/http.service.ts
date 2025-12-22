import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './shared/models/Post';
import { PostHeaders } from './shared/models/PostHeaders';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient)
  // readonly apiUrl: string = ""
  readonly apiUrl: string = "http://localhost:8080"

  findPost(id: string){
    return this.http.get<Post>(`${this.apiUrl}/post/${id}`).subscribe()
  }

  findAllPostsSummary(){
    return this.http.get<PostHeaders[]>(`${this.apiUrl}/api/posts`)
  }

  findAllPostsSummaryOrdered(){
    return this.http.get<PostHeaders[]>(`${this.apiUrl}/api/posts?sort_by=date`)
  }
}
