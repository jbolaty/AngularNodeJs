import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent   {
   @Input() posts: Post[] = [];

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
}
