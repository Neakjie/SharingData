import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-out-put-child',
  templateUrl: './out-put-child.component.html',
  styleUrls: ['./out-put-child.component.sass']
})
export class ChildOutputComponent implements OnInit {
@Output() eventEmiter = new EventEmitter();
childMessage:string;
  constructor() { }
sendMessage(){
  this.eventEmiter.emit(this.childMessage)
}


  ngOnInit() {
  }

}
