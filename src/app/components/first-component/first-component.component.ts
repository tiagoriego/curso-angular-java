import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  valorNumerico: number = 10;
  valorTexto = "Olá";
  valorObjeto = {
    nome: "Jose",
    idade: 20
  }
  valorVetor = ["...", 1, 2];

  enderecos = [
    {
      tipoLogradouro: "rua",
      logradouro: "bartolomeu cordovil",
      bairro: "vila continental",
      cep: "02616020",
      cidade: "são paulo",
      estado: "sp"
    },
    {
      tipoLogradouro: "rua",
      logradouro: "bartolomeu cordovil",
      bairro: "vila continental",
      cep: "02616020",
      cidade: "são paulo",
      estado: "sp"
    },
    {
      tipoLogradouro: "rua",
      logradouro: "bartolomeu cordovil",
      bairro: "vila continental",
      cep: "02616020",
      cidade: "são paulo",
      estado: "sp"
    },
    {
      tipoLogradouro: "rua",
      logradouro: "bartolomeu cordovil",
      bairro: "vila continental",
      cep: "02616020",
      cidade: "são paulo",
      estado: "sp"
    }
  ]
}
