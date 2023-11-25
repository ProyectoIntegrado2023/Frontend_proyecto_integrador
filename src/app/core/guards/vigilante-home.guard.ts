import { CanActivateFn } from '@angular/router';
import { recopilarPersona } from '../function/localStorage/recopilarLocalStorage';

export const vigilanteHomeGuard: CanActivateFn = (route, state) => {
  const id: number = recopilarPersona().id;
  return id != 0;
};
