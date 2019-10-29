import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service'

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {
 message:string;
  constructor(private data: DataServiceService) { 
    this.data.currentMessageData.subscribe(message=>this.message=message)
  }

  newMessage(){
    this.data.changeMessage(this.message);
  }

  ngOnInit() {
  }

}
