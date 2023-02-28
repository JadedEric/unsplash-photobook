import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Photo } from "../models";

@Injectable({
  providedIn: 'root'
})
export class UnsplashTopicPhotosService {

  protected url = `${environment.unsplash.url}`;

  public photos$!: Observable<Photo[]>;

  constructor(private http: HttpClient) {}

  public retrievePhotos(slug = '', page = 1, per_page = 10) {
    this.photos$ = this.http
      .get<Photo[]>(`${this.url}topics/${slug}/photos?page=${page}&per_page=${per_page}&orientation=landscape`)
      .pipe(map(res => {
        const output = res.map((photo: any) => ({
          id: photo.id,
          urls: {
            raw: photo.urls.raw,
            full: photo.urls.full,
            regular: photo.urls.regular,
            small: photo.urls.small,
            thumb: photo.urls.thumb,
            s3: photo.urls.small_s3,
          },
          likes: photo.likes,
          description: photo.description,
          user: photo.user.name
        })) as Photo[];

        return output;
      }), catchError(this.handleError<Photo[]>('retrievePhotos', [])));
  }
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
