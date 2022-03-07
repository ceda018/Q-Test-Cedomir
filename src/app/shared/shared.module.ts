import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [

    ListItemComponent,
       ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    CommonModule,
    RouterModule,
    ListItemComponent,
    ListComponent,
  ]
})
export class SharedModule { }
