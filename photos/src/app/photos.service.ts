import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

// https://api.unsplash.com/photos/random?client_id=Hnodr4yDTHcFRpw2YeNs0hG9OLaj7hubf5j-Xu7Do1M

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http
      .get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization:
            'Client-ID Hnodr4yDTHcFRpw2YeNs0hG9OLaj7hubf5j-Xu7Do1M',
        },
      })
      .pipe(pluck('urls', 'regular'));
  }
}
 