import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
 private messageDataSource = new BehaviorSubject<string>("default Message");
 currentMessageData = this.messageDataSource.asObservable(); 

  constructor() { }

  changeMessage(message:string){
    this.messageDataSource.next(message);

  }
}
