import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConsultaCep } from '../interfaces/Endereco';
import { Cons, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultaCepService {
  private baseUrl = 'https://cep.awesomeapi.com.br/json/';

  constructor(private httpCliente: HttpClient) {}

  getCep(cep: string): Observable<ConsultaCep> {
    return this.httpCliente.get<ConsultaCep>(`${this.baseUrl}/${cep}`);
  }
}
