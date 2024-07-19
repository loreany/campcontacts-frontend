import { httpClient } from '../httpClient';

export interface PatchPasswordParams {
  oldPassword: string;
  newPassword: string;
}

export async function patch({ ...params }: PatchPasswordParams) {
  const { data } = await httpClient.patch(`/users/pass`, params);

  return data;
}
