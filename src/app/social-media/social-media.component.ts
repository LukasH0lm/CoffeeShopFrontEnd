
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { PostService } from '../services/API/Posts.service';
import {Post} from "../models/Post.model";
import {CreatePost} from "../models/CreatePost.model";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css'],
})
export class SocialMediaComponent implements OnInit {
  posts: Post[] = [];
  postForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
  });

  constructor(private postService: PostService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadPosts();

    this.postForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
    });

  }

  loadPosts(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  createPost(): void {
    if (this.postForm.valid) {
      const newPost: CreatePost = {

        //SUUUUNUENEUNUENUENNUENEEEE HVORDAN VIRKER COOOKIEIEIES?

        userId: '5566f328-a33a-4e3a-2c9f-08dbff3f2012', // Replace with the actual user id



        title: this.postForm.get('title')?.value,
        text: this.postForm.get('text')?.value,
      };

      this.postService.createPost(newPost).subscribe(() => {
        // Reload posts after creating a new one
        this.loadPosts();
        // Clear the form
        this.postForm.reset();
      });
    }
  }
}
