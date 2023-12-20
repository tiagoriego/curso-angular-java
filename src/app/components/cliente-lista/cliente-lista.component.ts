import { Component } from '@angular/core';
import { Cliente } from 'src/app/interfaces/Cliente';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent {
  clientes: Cliente[] = [];

  onAdicionarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }
}
