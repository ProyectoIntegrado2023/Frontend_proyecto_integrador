import { Observable } from 'rxjs';
import { CanDeactivateFn } from '@angular/router';

export interface deactivateProyecto {
  canExit: () => boolean | Promise<boolean> | Observable<boolean>;
}

export const deactivateProyectoGuard: CanDeactivateFn<deactivateProyecto> = (component, currentRoute, currentState, nextState) => {
  return component.canExit();
};
