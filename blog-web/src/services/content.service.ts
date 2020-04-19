import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  getAllContents() {
    return this.http.get(`${environment.apiUrl}/contents`).pipe(map(res => res));
  }

  getContent(contentId) {
    return this.http.get(`${environment.apiUrl}/contents/${contentId}`).pipe(map(res => res));
  }
}
