import { Injectable } from '@angular/core';
import {PostsModel} from "../../models/Posts.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class PostsService {

  private baseUrl = "http://localhost:5196/api/Posts";
  constructor(private http: HttpClient) { }



  // Midlertidig data indtil api virker :)
  private posts: PostsModel[] = [

  ];



  getPosts(): PostsModel[] {
    return this.posts;
  }

  getPostById(id: number) {
    return this.posts.find((posts) => posts.PostId === id);
  }


}
