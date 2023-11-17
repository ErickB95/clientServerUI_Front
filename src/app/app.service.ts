import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/text';
  }

  public completeRequests(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }
}
