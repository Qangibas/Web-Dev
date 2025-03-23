// album.services.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Albums } from './albums';
import { Photos } from './photos';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private base: string = 'https://jsonplaceholder.typicode.com/albums/';

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Albums[]> {
    return this.client.get<Albums[]>(this.base)
      .pipe(catchError(this.handleError));
  }

  getAlbum(id: number): Observable<Albums> {
    return this.client.get<Albums>(`${this.base}${id}`)
      .pipe(catchError(this.handleError));
  }

  getPhotos(id: number): Observable<Photos[]> {
    return this.client.get<Photos[]>(`${this.base}${id}/photos`)
      .pipe(catchError(this.handleError));
  }

  addAlbum(album: Albums): Observable<Albums> {
    return this.client.post<Albums>(this.base, album)
      .pipe(catchError(this.handleError));
  }

  deleteAlbum(id: number): Observable<unknown> {
    return this.client.delete(`${this.base}${id}`)
      .pipe(catchError(this.handleError));
  }

  updateAlbum(album: Albums): Observable<Albums> {
    return this.client.put<Albums>(`${this.base}${album.id}`, album)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
