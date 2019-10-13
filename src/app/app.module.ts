import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { FormsModule } from '@angular/forms';
import { PhotosCommentFormComponent } from './photos-comment-form/photos-comment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosCommentFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PhotosModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
