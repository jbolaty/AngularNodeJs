import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';

import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit , OnDestroy {
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
  posts: Post[] = [];

  private postsSub: Subscription;
  postService: PostService;

  constructor(postService: PostService){
    this.postService = postService;
  }

  ngOnInit() {
    this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
