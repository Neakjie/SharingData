import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.scss']
})
export class ChildOutputComponent implements OnInit {
@Output() messageEvent = new EventEmitter<string>();
message:string;
  constructor() { }
sendMessage(){
  this.messageEvent.emit(this.message);
}
  ngOnInit() {
  }

}
