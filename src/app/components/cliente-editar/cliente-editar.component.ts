import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.css'],
})
export class ClienteEditarComponent implements OnInit {
  public formEditarCliente: FormGroup;
  public cliente?: Cliente;
  public showError: boolean = false;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formEditarCliente = this.getForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (param) => {
        this.clienteService.getById(param['id']).subscribe({
          next: (cliente: Cliente) => {
            this.cliente = cliente;
            this.formEditarCliente = this.getForm();
          },
          error: () => {
            this.showError = true;
          },
        });
      },
    });
  }

  private getForm(): FormGroup {
    return new FormGroup({
      nome: new FormControl(this.cliente?.nome, [
        Validators.minLength(3),
        Validators.required,
      ]),
      telefone: new FormControl(this.cliente?.telefone, [
        Validators.minLength(3),
        Validators.required,
      ]),
      email: new FormControl(this.cliente?.email, [
        Validators.minLength(3),
        Validators.required,
      ]),
    });
  }

  get nome() {
    return this.formEditarCliente.get('nome');
  }

  get telefone() {
    return this.formEditarCliente.get('telefone');
  }

  get email() {
    return this.formEditarCliente.get('email');
  }

  onSaveCadastroCliente(): void {
    const cliente: Partial<Cliente> = {
      nome: this.nome?.value,
      telefone: this.telefone?.value,
      email: this.email?.value,
    };

    const fields = Object.keys(cliente);
    let isValid = true;
    for (const field of fields) {
      if (this.formEditarCliente.get(field)?.invalid) {
        isValid = false;
        this.formEditarCliente.get(field)?.markAsDirty();
      }
    }

    if (!isValid) return;

    const clienteId = this.cliente?.id ?? '';

    this.clienteService.update(clienteId, cliente).subscribe({
      next: () => {
        this.router.navigateByUrl('/cliente-lista');
      },
    });
  }
}
