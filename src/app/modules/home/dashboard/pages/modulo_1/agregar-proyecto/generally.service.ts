import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerallyService {
  public stateForm : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor() { }

  public init(state:boolean){
    this.stateForm.next(state);
  }
}
