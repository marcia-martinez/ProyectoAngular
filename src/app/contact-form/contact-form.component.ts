import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
      <form class="contact-form"
      [formGroup]="contactForm"
      (submit)="handleSubmit()">

        <fieldset>
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" 
            formControlName="name" required>

            <div
            class="alert alert-danger"
            [hidden]="name.valid || name.untouched">
            Dato faltante
            </div>

            <label for="lastName">Apellido:</label>
            <input type="text" id="lastName" name="lastName" 
            formControlName="lastName" required>
            
            <div
            class="alert alert-danger"
            [hidden]="lastName.valid || lastName.untouched">
            Dato faltante
            </div>


            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" 
            formControlName="email" required>

            <div
            class="alert alert-danger"
            [hidden]="email.valid || email.untouched">
            Dato faltante o invalido
            </div>

            <label for="phone">Número de Teléfono:</label>
            <input type="tel" id="phone" name="phone" 
            formControlName="phone" required>

            <button type="submit">Enviar</button>
        </fieldset>
      </form>
  `,
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm= new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
  });
    
  get name() {
      return this.contactForm.get('name') as FormControl;
    }

  get lastName() {
      return this.contactForm.get('lastName') as FormControl;
    }

  get email() {
      return this.contactForm.get('email') as FormControl;
    }
  get phone() {
      return this.contactForm.get('phone') as FormControl;
    }
  
    handleSubmit() {
      if (this.contactForm.invalid) return;
      const newcontact = {
        name: this.name.value,
        lastName: this.lastName.value,
        phone: this.phone.value,
        email: this.email.value,
      };
      
      alert('Su formulario fue validado correctamente')
  
}}
