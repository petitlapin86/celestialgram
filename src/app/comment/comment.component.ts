import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment', //define the component
  templateUrl: './comment.component.html', //link to view/template
  styleUrls: ['./comment.component.css'] //link to css
})
export class CommentComponent { //create class for comments
  @Input() comments: []; 
  @Output() onAddComment: EventEmitter<any> = new EventEmitter();
  showCommentForm: boolean = false;

  commentForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]), //require form input validation
    body: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  // helper getter to get comment form name
  get name() {
    return this.commentForm.get('name');
  }

  // helper getter to get comment form body
  get body() {
    return this.commentForm.get('body');
  }

 //show/hide comment input form
  toggleCommentForm() {
    this.showCommentForm = !this.showCommentForm;
  }

  // add a comment
  addComment() {
    const name = this.name.value;
    const body = this.body.value;

    // emits a (onAddComment) event that gets propagated to photo.component.html
    this.onAddComment.emit({ name, body });
    // reset the values in the input and textarea to empty string
    this.commentForm.reset();
  }
}
