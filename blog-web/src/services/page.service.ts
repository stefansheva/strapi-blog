import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) { }

  getAllPages() {
    return this.http.get(`${environment.apiUrl}/pages`).pipe(map(res => res));
  }

  getPage(pageId) {
    return this.http.get(`${environment.apiUrl}/pages/${pageId}`).pipe(map(res => res));
  }
}
