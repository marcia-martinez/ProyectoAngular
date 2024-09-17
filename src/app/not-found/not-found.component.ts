import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found-container">
      <h4>404 - Página no encontrada</h4>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <a href="books" class="home-link">Volver al inicio</a>
    </div>
  `,
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
