import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-data-sending',
  templateUrl: './routing-data-sending.component.html',
  styleUrls: ['./routing-data-sending.component.sass']
})
export class RoutingDataSendingComponent implements OnInit {
message:string;
  constructor(private ar:ActivatedRoute) { }

  ngOnInit() {
    this.ar.params.subscribe(para=>{
      this.message = para[0]
    })
  }



}
