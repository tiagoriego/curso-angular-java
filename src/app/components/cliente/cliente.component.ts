import { Component, Output, EventEmitter } from '@angular/core';
import { Cliente } from 'src/app/interfaces/Cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  @Output() adicionarCliente: EventEmitter<Cliente> = new EventEmitter<Cliente>();

  nome: string = '';
  cpf: string = '';

  handleAdicionarCliente(): void {
    const cliente: Cliente = {
      id: '102030abcd',
      nome: this.nome,
      cpf: this.cpf
    }
    this.adicionarCliente.emit(cliente)
  }

}
