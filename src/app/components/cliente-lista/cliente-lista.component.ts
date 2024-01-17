import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'],
})
export class ClienteListaComponent implements OnInit {
  public clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.loadCliente();
  }

  loadCliente(): void {
    this.clienteService.getAll().subscribe({
      next: (result: Cliente[]) => {
        this.clientes = result;
      },
      error: (error: HttpErrorResponse) => {
        console.error('Falha ao carregar a lista de clientes', error.message);
      },
    });
  }

  onNovoCliente(): void {
    this.router.navigate(['cadastro-cliente']);
  }

  onRemoveCliente(id: string): void {
    this.clienteService.delete(id).subscribe({
      next: () => {
        this.loadCliente();
      },
      error: (error: HttpErrorResponse) => {
        console.error(
          'Ocorreu um erro ao tentar remover o cliente:',
          error.message
        );
      },
    });
  }
}
