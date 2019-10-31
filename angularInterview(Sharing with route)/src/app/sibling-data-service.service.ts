import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingDataServiceService {
messageData = new BehaviorSubject<string>("Nothing");
currentMessage = this.messageData.asObservable();



sendMessage(message:string){
    this.messageData.next(message)
}

  constructor() { }
}
