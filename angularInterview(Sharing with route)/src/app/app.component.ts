import { Component, ViewChild, OnInit } from '@angular/core';
import { ChildViewComponent } from './child-view/child-view.component';
import { SiblingDataServiceService } from './sibling-data-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
      message:string="Hello from your Mom";
      viewChildMessage:string;
      childOutputMessage:string;
      siblingMessage:string;

@ViewChild(ChildViewComponent,{static:false}) child;

constructor(private dataService:SiblingDataServiceService,private route:Router){
  dataService.messageData.subscribe(message=>this.siblingMessage=message)
}


ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  this.viewChildMessage = this.child.childMessage;
}
ngOnInit(){

}

recivedMessage($event){
  this.childOutputMessage = $event;
  console.log($event);
  
}

seeMessage(){
  this.route.navigate(['/route',[this.message]])
}



}
