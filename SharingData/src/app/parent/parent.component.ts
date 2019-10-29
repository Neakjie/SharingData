import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from "../child-view/view-child.component";
import { DataServiceService } from '../data-service.service'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
 message:string = "Hello from your Father using Input";
 messageFromChildUsingOutput:string;
 messageByViewChild:string;
 messageFromSibling:string;
 @ViewChild(ViewChildComponent,{static:false}) child;
  constructor(private data:DataServiceService) { }
  receiveMessage($event){
    this.messageFromChildUsingOutput = $event;
    
  }
  ngOnInit() {
    this.data.currentMessageData.subscribe(message=>this.messageFromSibling = message)
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.messageByViewChild =this.child.message;
  }

}
