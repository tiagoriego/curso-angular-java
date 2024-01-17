import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router'
import { Cliente } from 'src/app/interfaces/cliente';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent {
  public formCadastroCliente: FormGroup

  constructor(private clienteService: ClienteService, private router: Router) {
    this.formCadastroCliente = this.getForm()
  }

  private getForm(): FormGroup {
    return new FormGroup({
      nome: new FormControl('', [Validators.minLength(3), Validators.required]),
      telefone: new FormControl('', [Validators.minLength(3), Validators.required]),
      email: new FormControl('', [Validators.minLength(3), Validators.required]),      
    })
  }

  get nome() {
    return this.formCadastroCliente.get('nome')
  }

  get telefone() {
    return this.formCadastroCliente.get('telefone')
  }

  get email() {
    return this.formCadastroCliente.get('email')
  }

  onSaveCadastroCliente(): void {
    const cliente: Partial<Cliente> = {
      nome: this.nome?.value,
      telefone: this.nome?.value,
      email: this.email?.value
    }

    const fields = Object.keys(cliente)
    let isValid = true
    for (const field of fields) {
      if (this.formCadastroCliente.get(field)?.invalid) {
        isValid = false;
        this.formCadastroCliente.get(field)?.markAsDirty()
      }
    }

    if (!isValid) return;

    this.clienteService.save(cliente).subscribe({
      next: () => {
        this.router.navigate(['cliente-lista'])
      },
      error: (error: HttpErrorResponse) => {
        console.error('Ocorreu um erro ao tentar salvar o cliente:', error.message)
      }
    })
  }

}
