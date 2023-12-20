export interface Endereco {
  tipoLogradouro: string;
  logradouro: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
}

export interface ConsultaCep {
  cep: string
  address_type: string
  address_name: string
  address: string
  state: string
  district: string
  lat: string
  lng: string
  city: string
  city_ibge: string
  ddd: string
}


