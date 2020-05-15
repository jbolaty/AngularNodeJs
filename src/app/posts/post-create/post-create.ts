import { Component } from '@angular/core';
import { Post } from '../post.model'
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component ({
  selector: 'app-post-create',
  templateUrl: './post-create.html',
  styleUrls: ['./post-create.css']
})

export class PostCreateComponent {

  enteredContent = '';
  enteredTitle = '';

constructor(public postsService: PostService) {

}

  onAddpost(form: NgForm){
    if (form.invalid){
      return;
    }
    this.postsService.addPosts(form.value.title, form.value.content);
    form.resetForm();
  }

}
