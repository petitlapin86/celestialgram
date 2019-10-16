import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

export interface Comment {
  name: string;
  body: string;
}

@Component({
  selector: 'app-photos', //define component name
  templateUrl: './photos.component.html', //link to view
  styleUrls: ['./photos.component.css'] //link to css
})
export class PhotosComponent implements OnInit { //create photos component class
  photos: any[];

  constructor(private photosService: PhotosService) {}

  ngOnInit() {
    this.searchPhotos();
  }

  /**
   * This method is called when the comment button is clicked
   * @param comment
   * @param body
   */
  addComment(comment: Comment, photoId: string) {
    this.photos.find((photo: any, index: number) => {
      if (photo.id === photoId) {
        photo.comments.push({ ...comment });
        this.photos[index] = photo;
        return true;
      }
      return false;
    });
    console.log(this.photos);
  }

  /**
   * This method is called when the search button is clicked on the page
   * it collects the search term and photo count to display and pass it on to the service to fetch the photos
   * @param searchTerm
   * @param count
   */
  searchPhotos(searchTerm: string = 'stars', count: string = '100') {
    const perPage = parseInt(count, 10);
    if (!searchTerm || !perPage || perPage > 100) return;

    this.photosService.getPhotos(searchTerm, perPage).subscribe(data => {
      this.photos = data;
    });
  }
}
