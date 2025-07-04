import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-normal',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-normal.html',
  styleUrl: './formulario-normal.css'
})
export class FormularioNormal {
  name: string = '';
  listNames: string[] = [];
  save() {
    if (this.name.trim()) {
      this.listNames.push(this.name.trim());
      this.name = '';
    }
  }

}
