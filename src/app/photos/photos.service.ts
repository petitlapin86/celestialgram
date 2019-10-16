import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as faker from 'faker';

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
          const fakeComments = this.getFakeComments(images.length);

          return images
            .map((image: any) => {
              image.comments = [];
              return image;
            })
            .map((image: any, index: number) => {
              image.comments.push(fakeComments[index]);
              return image;
            });
        })
      );
  }

  // use faker.js library to generate fake comments for the number of photos returned from api
  getFakeComments(count: number) {
    const fakeComments = [];
    for (let i = 0; i < count; i++) {
      fakeComments.push({
        name: faker.name.findName(),
        body: faker.lorem.sentence()
      });
    }

    return fakeComments;
  }
}
