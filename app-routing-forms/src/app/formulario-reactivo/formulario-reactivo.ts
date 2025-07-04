import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-reactivo.html',
  styleUrl: './formulario-reactivo.css'
})
export class FormularioReactivo {

  miFormulario: FormGroup;
  listCorreos: string[] = [];

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  enviar() {
    if (this.miFormulario.valid) {
      console.log('Formulario válido', this.miFormulario.value);
      this.listCorreos.push(this.miFormulario.value.correo);
      this.miFormulario.reset();
    } else {
      console.log('Formulario inválido');
      this.miFormulario.markAllAsTouched();
    }
  }

}
