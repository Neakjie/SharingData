import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.sass']
})
export class ChildViewComponent implements OnInit {
childMessage:string="Im view child"
  constructor() { }

  ngOnInit() {
  }

}
