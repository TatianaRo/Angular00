import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {

  //grupo de whatsapp
  menuMessageBus = new Subject<boolean>();
  constructor() { }
}
