import { Component } from '@angular/core';
import { ConsultaCep } from 'src/app/interfaces/Endereco';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';

@Component({
  selector: 'app-consulta-cep',
  templateUrl: './consulta-cep.component.html',
  styleUrls: ['./consulta-cep.component.css'],
})
export class ConsultaCepComponent {
  cepConsultado: ConsultaCep | undefined | null = null;
  cep: string = '';
  falhaNaConsulta: boolean = false;

  constructor(private consultaCepService: ConsultaCepService) {    
  }

  onConsultarCep(): void {
    this.consultaCepService.getCep(this.cep).subscribe({
      next: (result: ConsultaCep) => {
        this.cepConsultado = result;
        this.falhaNaConsulta = false;
      },
      error: (error) => {
        console.log('Falha na consulta de CEP', error.message);
        this.cepConsultado = null;
        this.falhaNaConsulta = true;
      }
    })
  }

}
