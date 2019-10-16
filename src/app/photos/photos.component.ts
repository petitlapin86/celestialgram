import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: any[];

  constructor(private photosService: PhotosService) {}

  ngOnInit() {
    this.searchPhotos();
  }

  /**
   * This method is called the comment button is clicked
   * @param id
   * @param comment
   */
  addComment(id: string, name: string, comment: string) {
    this.photos.find((photo: any, index: number) => {
      if (photo.id === id) {
        photo.comments.push({
          name,
          comment
        });
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
      console.log(this.photos);
    });
  }
}
