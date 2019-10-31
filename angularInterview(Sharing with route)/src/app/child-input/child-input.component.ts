import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.sass']
})
export class ChildInputComponent implements OnInit {

@Input() childMessage;
  constructor() { }

  ngOnInit() {
  }

}
