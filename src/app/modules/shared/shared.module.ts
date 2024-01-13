import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayout } from './main/layouts/main.layout';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainLayout
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
