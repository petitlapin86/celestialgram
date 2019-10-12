import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private http: HttpClient) { }

  getPhotos(searchTerm: string = 'stars', per_page = 100) {
    return this.http
    .get(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=9bff1b85896003b69f49b4cc9d5d9ef1953325e16c8040550057bb0962bcd0d4`)
    .pipe(map(data => data.results))

  }

//******************testing this here
addComment(entryId: number, comment: { name: string; comment: string; }){
    return this.http.post(`/app/entries/${entryId}/comments`, comment)
    .toPromise();
  }

  //****************************
}
