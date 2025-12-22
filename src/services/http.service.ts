import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient)
  // readonly apiUrl: string = ""
  readonly apiUrl: string = "http://localhost:8080"

  findPost(id: string){
    return this.http.get<Post>(`${this.apiUrl}/post/${id}`)
  }

  findAllPosts(){
    return this.http.get<Headers[]>(`${this.apiUrl}/post`)
  }
}
