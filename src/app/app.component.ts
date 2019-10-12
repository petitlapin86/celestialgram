import { Component } from '@angular/core';
//import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-photos-app';

  //constructor(private photoService: PhotoService) {}

//  ngOnInit() {
  //  this.photoService.getPhotos().subscribe(console.log);
//  }
}
