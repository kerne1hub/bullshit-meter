import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateStatisticsSelectComponent } from './statistics-select.component';
import { DropdownModule } from '@shared/dropdown';

@NgModule({
  declarations: [
    PrivateStatisticsSelectComponent
  ],
  imports: [CommonModule, DropdownModule],
  providers: [],
  exports: [
    PrivateStatisticsSelectComponent
  ]
})
export class PrivateStatisticsSelectModule { }
