
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../models/Post.model';
import { CreatePost } from '../../models/CreatePost.model';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = 'http://localhost:5196/api';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }

  createPost(post: CreatePost): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/posts`, post);
  }
}
