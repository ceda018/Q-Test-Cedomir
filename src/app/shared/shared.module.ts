import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    ListItemComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ], exports: [
    CommonModule,
    RouterModule,
    ListItemComponent,
    ListComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
