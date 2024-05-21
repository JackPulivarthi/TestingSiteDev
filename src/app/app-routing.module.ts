import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LrsComponent } from './lrs/lrs.component';



const routes: Routes = [{
  path:'lrs', component:LrsComponent
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
