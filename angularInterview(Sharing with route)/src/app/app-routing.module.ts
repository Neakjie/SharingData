import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingDataSendingComponent } from './routing-data-sending/routing-data-sending.component';


const routes: Routes = [{path:"route",component:RoutingDataSendingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
