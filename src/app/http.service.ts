import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './shared/models/Post';
import { PostHeaders } from './shared/models/PostHeaders';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient)


  findPost(id: string) {
    return this.http.get<Post>(`${environment.apiBaseUrl}/api/posts/${id}`);
  }

  findAllPostsSummary() {
    return this.http.get<PostHeaders[]>(`${environment.apiBaseUrl}/api/posts`);
  }

  findAllPostsSummaryOrdered() {
    return this.http.get<PostHeaders[]>(`${environment.apiBaseUrl}/api/posts?sort_by=date`);
  }
}
