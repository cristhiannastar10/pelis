import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadProductionComponent } from './read-production/read-production.component';

@NgModule({
  declarations: [
    ReadProductionComponent
  ],
  imports: [
    CommonModule  // Add CommonModule to imports
  ]
})
export class ProductionsModule { }
