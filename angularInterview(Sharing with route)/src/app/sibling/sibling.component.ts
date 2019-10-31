import { Component, OnInit } from '@angular/core';
import { SiblingDataServiceService } from '../sibling-data-service.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.sass']
})
export class SiblingComponent implements OnInit {
  siblingMessage:string;

  constructor(private dataService:SiblingDataServiceService) { 
    this.dataService.messageData.subscribe(message=>this.siblingMessage=message)
  }

  sendMessage(){
    this.dataService.sendMessage(this.siblingMessage)
  }

  ngOnInit() {
  }

}
