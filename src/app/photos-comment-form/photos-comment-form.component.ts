import { Component, EventEmitter, Input, Output, ViewChild }  from '@angular/core';
//note to self EventEmitter passes data between two components send & receive
//viewchild will find the local variable I created commentForm
import { NgForm } from '@angular/forms';
import {PhotosService} from '../photos/photos.service' ;

@Component({
  selector: 'app-photos-comment-form',
  templateUrl: './photos-comment-form.component.html',
  styleUrls: ['./photos-comment-form.component.css']
})
export class PhotosCommentFormComponent {
  name: string = ""; //could set to any, number, string data types etc.
  comment: string = "";
  @Input() entryId: number;
  @Output() onCommentAdded = new EventEmitter<{name: string; comment:string;}>(); //
  //the @Output() decorator sends data from the event emitter
  @ViewChild('commentForm') commentForm: NgForm; //call the viewchild decorator, bind commentForm to the local variable in the template

  constructor(private photoService: PhotosService) {

  }

  onSubmit(commentForm: NgForm) {
    if(this.commentForm.invalid) return; //if the form is not valid dont execute function --> this solves the issue of blank comment space being added
    let comment = { name: this.name, comment: this.comment };
    this.photoService.addComment(this.entryId, comment)
      .then(() => {
          this.onCommentAdded.emit(comment);
          this.commentForm.resetForm();
      }); //closes .then function
    } //closes onsubmit
  } //closes class
