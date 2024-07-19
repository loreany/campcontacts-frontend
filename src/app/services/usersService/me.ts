import { User } from '../../entities/User';
import { httpClient } from '../httpClient';

type MeRespose = User;

export async function me() {
  const { data } = await httpClient.get<MeRespose>('/users/me');

  return data;
}
