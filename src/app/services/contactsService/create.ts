import { httpClient } from '../httpClient';

export interface CreateContactsParams {
  grupo?: string[1];
  nome: string;
  endereco?: string;
  bairro?: string;
  latitude?: string;
  longitude?: string;
  fone?: string;
  whatsapp?: boolean;
  email?: string;
  redeSocial?: string;
  obs?: string;
  area?: string;
  status?: string[1];
}

export async function create(params: CreateContactsParams) {
  const { data } = await httpClient.post('/contacts', params);

  return data;
}
