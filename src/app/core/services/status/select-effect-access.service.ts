import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectEffectAccessService {

  private selectEffect: BehaviorSubject<number> = new BehaviorSubject(0);

  public emit(selected_id: number): void {
    this.selectEffect.next(selected_id);
  }

  public get(): BehaviorSubject<number> {
    return this.selectEffect;
  }

  public reset(): void {
    this.selectEffect.next(0);
  }

}
