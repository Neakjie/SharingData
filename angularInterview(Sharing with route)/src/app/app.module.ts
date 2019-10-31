import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material'
import { MatButtonModule } from '@angular/material';
import { ChildInputComponent } from './child-input/child-input.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { ChildOutputComponent } from './child-output/out-put-child.component'
import { FormsModule } from '@angular/forms';
import { SiblingComponent } from './sibling/sibling.component';
import { SiblingDataServiceService } from './sibling-data-service.service';
import { RoutingDataSendingComponent } from './routing-data-sending/routing-data-sending.component';





@NgModule({
  declarations: [
    AppComponent,
    ChildInputComponent,
    ChildViewComponent,
    ChildOutputComponent,
    SiblingComponent,
    RoutingDataSendingComponent
  ],
  imports: [
    FormsModule,
    MatButtonModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [SiblingDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
