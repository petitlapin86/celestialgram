import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { PhotosService } from './photos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [PhotosService],
  exports:[PhotosComponent]
})
export class PhotosModule { }
