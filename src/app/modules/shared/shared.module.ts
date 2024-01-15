import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayout } from './layouts/main.layout';
import { RouterModule } from '@angular/router';
import { FixedModule } from '../fixed/fixed.module';
import { ContentModule } from '../content/content.module';

@NgModule({
  declarations: [
    MainLayout
  ],
  imports: [
    CommonModule,
    RouterModule,
    FixedModule,
    ContentModule
  ],
  exports: [
    MainLayout
  ]
})
export class SharedModule { }
