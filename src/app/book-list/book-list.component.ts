import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-book.service';
import { Observable } from 'rxjs';
import { IBook } from '../types/types';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div class="container-book">

    @let booksList = (bookResult$ | async);
      @if(!booksList?.length){
      <p>Procesando...</p>
      }@else {

        @for(book of booksList; track book.id; let i = $index){
        <section>
          <img [src]="book?.photo" alt="">
          <div class="book-description">
            <h3>{{ book.name }}</h3>
            <p>Autor: {{ book.author }} </p>
            <p>Precio: $ {{ book.price }} </p>
            <button (click)="onBookClicked(book.id)">Ver producto</button>
          </div>
        </section>
      }

      }
    </div>
  `,
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit{
  public bookResult$!: Observable<IBook[]>;
  constructor(private api: ApiService, private router: Router) {}
  ngOnInit(): void {
    this.bookResult$ = this.api.getAllBooks();
  }
  onBookClicked(bookId: string): void {
    this.router.navigate(['/book', bookId]);
  }
}
