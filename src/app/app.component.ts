import { Component } from '@angular/core';
import { Cliente } from './cliente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listaclientesangular-app';
  clientes: Cliente[] = [
    {
      id: 1,
      nombre: 'CLiente1',
      direccion: 'Dirección 1',
      correo: 'cliente1@ejemplo.com',
      telefono: '123456789'
    },
    {
      id: 2,
      nombre: 'CLiente2',
      direccion: 'Dirección 2',
      correo: 'cliente2@ejemplo.com',
      telefono: '123456789'
    },
    {
      id: 3,
      nombre: 'CLiente3',
      direccion: 'Dirección 3',
      correo: 'cliente3@ejemplo.com',
      telefono: '123456789'
    }
  ];
}
