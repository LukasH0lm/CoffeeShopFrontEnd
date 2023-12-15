import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PostsModel} from "../../models/Posts.model";

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'api/posts'; // Replace with the actual API endpoint

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<PostsModel[]> {
    return this.http.get<PostsModel[]>(this.apiUrl);
  }

  getPostById(postId: string): Observable<PostsModel> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.get<PostsModel>(url);
  }

  addPost(post: PostsModel): Observable<string> {
    return this.http.post<string>(this.apiUrl, post);
  }

  updatePost(post: PostsModel): Observable<void> {
    const url = `${this.apiUrl}/${post.postId}`;
    return this.http.put<void>(url, post);
  }

  deletePost(postId: string): Observable<void> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.delete<void>(url);
  }
}
