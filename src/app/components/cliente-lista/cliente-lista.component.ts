import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'],
})
export class ClienteListaComponent implements OnInit {
  public clientes: Cliente[] = [];
  public searchText: string | null = null;
  public modalRef?: BsModalRef;
  private clienteId: string = '';

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private modalService: BsModalService
  ) {}

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

  removeCliente(id: string): void {
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

  openModal(template: TemplateRef<void>, clienteId: string) {
    this.clienteId = clienteId;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  onConfirm(): void {
    this.removeCliente(this.clienteId);
    this.modalRef?.hide();
  }

  onDecline(): void {
    this.modalRef?.hide();
  }

  onEditarCliente(clienteId: string): void {
    this.router.navigateByUrl(`/editar-cliente/${clienteId}`);
  }
}
