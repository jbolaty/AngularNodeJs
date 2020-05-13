import { Component, Input } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent   {
  // posts = [
  //   {
  //    title : 'First Post',
  //    content : 'this is the first post '
  //   },
  //   {
  //     title : 'second Post',
  //     content : 'this is the second post '
  //    },
  //    {
  //     title : 'third Post',
  //     content : 'this is the third post '
  //    }
  // ]
  @Input() posts: Post[] = [];

  postService: PostService;

  constructor(postService: PostService){
    this.postService = postService;

  }
}
