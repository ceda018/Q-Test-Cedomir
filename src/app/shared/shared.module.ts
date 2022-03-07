import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
  
    ListItemComponent,
       ListComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    CommonModule,
    ListItemComponent,
    ListComponent,
  ]
})
export class SharedModule { }
