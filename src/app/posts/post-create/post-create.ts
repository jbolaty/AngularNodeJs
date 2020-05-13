import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model'
import { NgForm } from '@angular/forms';

@Component ({
  selector: 'app-post-create',
  templateUrl: './post-create.html',
  styleUrls: ['./post-create.css']
})

export class PostCreateComponent {

  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter<Post>(); // So that the element can be used outside (to the parent)

  onAddpost(form: NgForm){
    if (form.invalid){
      return;
    }
    const post: Post = {title : form.value.title, content : form.value.content};
    // this.newPost = this.enteredValue;
    this.postCreated.emit(post);
  }

}
