import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateEffectProjectService {

  private updateEffect: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public emit(status:boolean): void {
    this.updateEffect.next(status);
  }

  public get(): BehaviorSubject<boolean> {
    return this.updateEffect;
  }

  public reset(): void {
    this.updateEffect.next(false);
  }

}
