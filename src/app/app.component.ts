import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
  <div class="totalContainer">

      <h1>El Rincón de los Libros</h1>
      <nav>
          <a class="buttonForm" routerLink="/books" routerLinkActive="activeButton" ariaCurrentWhenActive="page">Lista de libros</a> 
          <a class="buttonForm" routerLink="/contact" routerLinkActive="activeButton" ariaCurrentWhenActive="page">Formulario de contacto</a>
      </nav>
      
      <main>
      <router-outlet />
      </main> 
  </div>

  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TrabajoPractico-ng';
}
