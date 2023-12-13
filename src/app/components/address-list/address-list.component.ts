import { Component, Input, OnInit } from '@angular/core';

type endereco = {
  tipoLogradouro: string
  logradouro: string
  bairro: string
  cep: string
  cidade: string
  estado: string
}


@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  @Input() enderecos: endereco[] = [];
  style = {
    fontColor: "red",
    fontSize: "25px"
  }

  exibirEndereco: boolean = false;

  ngOnInit(): void {
    this.exibirEndereco = this.enderecos.length > 0
  }
}
