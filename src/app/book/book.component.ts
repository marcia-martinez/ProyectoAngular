import { Component, inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../types/types';
import { ApiService } from '../services/api-book.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @let book = (bookObservable$ | async);
    @if(!book){
    <p>Procesando...</p>
    }@else {
    <div class="book-card">
      <img [src]="book?.photo" alt=""> 
      <h3>{{book.name}}</h3>
      <p>Autor: {{book.author}}</p>
      <p>{{book.description}}</p>
      <p><strong>Precio</strong>: $ {{book.price}}</p>
      <p>Codigo del producto: {{book.codeOfProduct}}</p>
      <button type="button">Comprar</button>
    </div>

    }
  `,
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit{
  public bookObservable$!: Observable<IBook>;
  private api: ApiService = inject(ApiService);
  @Input() id!: string; 
  ngOnInit(): void {
    this.bookObservable$ = this.api.getOneBook(this.id);
}}
