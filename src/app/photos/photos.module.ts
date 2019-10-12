import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { PhotosService } from './photos.service';


@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule
  ],
  providers: [PhotosService],
  exports:[PhotosComponent]
})
export class PhotosModule { }
