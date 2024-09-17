import { inject, Injectable } from '@angular/core';
import { IBook } from '../types/types'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root',})

export class ApiService {
  url = 'https://66d4a4745b34bcb9ab3f222b.mockapi.io/books/';
  http: HttpClient = inject(HttpClient);
  constructor() {}
  getAllBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }
  getOneBook(id: string): Observable<IBook> {
    return this.http.get<IBook>(this.url + id);
  }
}
