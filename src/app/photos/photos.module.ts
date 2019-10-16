import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { PhotosService } from './photos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentComponent } from '../comment/comment.component';

@NgModule({
  declarations: [PhotosComponent, CommentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PhotosService],
  exports:[PhotosComponent, CommentComponent]
})
export class PhotosModule { }
