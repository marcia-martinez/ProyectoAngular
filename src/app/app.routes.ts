import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [
  { path: 'books', title: 'Home', component: BookListComponent },
  { path: 'book', title: 'books', component: BookComponent },
  { path: 'book/:id', title: 'book', component: BookComponent },
  { path: 'contact', title: 'books', component: ContactFormComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
