import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Post } from './shared/models/Post';
import { PostHeaders } from './shared/models/PostHeaders';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient)
  
  // readonly apiUrl: string = ""
  readonly apiUrl: string = "http://localhost:8080"

  findPost(id: string) {
    return this.http.get<Post>(`${this.apiUrl}/api/posts/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  findAllPostsSummary() {
    return this.http.get<PostHeaders[]>(`${this.apiUrl}/api/posts`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  findAllPostsSummaryOrdered() {
    return this.http.get<PostHeaders[]>(`${this.apiUrl}/api/posts?sort_by=date`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}
