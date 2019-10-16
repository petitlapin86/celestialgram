import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  /**
   * sends request to unsplash api with a query to search a specific image (searchTerm)
   * and return specified (perPage) number of photos
   * @param searchTerm
   * @param perPage
   */
  getPhotos(searchTerm: string, perPage: number) {
    return this.http
      .get(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=9bff1b85896003b69f49b4cc9d5d9ef1953325e16c8040550057bb0962bcd0d4&per_page=${perPage}`
      )
      .pipe(
        map((data: any) => {
          const images: [] = data.results;
          return images.map((image: any) => {
            image.comments = [];
            image.showActions = false;
            return image;
          });
        })
      );
  }

  //******************testing this here
  // addComment(entryId: number, comment: { name: string; comment: string }) {
  //   return this.http
  //     .post(`/app/photos/${entryId}/comments`, comment)
    //   .toPromise();
  // }



}
