import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Topic } from "../models";

@Injectable({
  providedIn: 'root'
})
export class UnsplashTopicService {

  protected url = `${environment.unsplash.url}`;

  public topics$!: Observable<Topic[]>;

  constructor(private http: HttpClient) {}

  public retrieveTopics(page = 1, per_page = 10) {
    this.topics$ = this.http
      .get<Topic[]>(`${this.url}topics?page=${page}&per_page=${per_page}`)
      .pipe( catchError(this.handleError<Topic[]>('retrieveTopics', [])));
  }
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
