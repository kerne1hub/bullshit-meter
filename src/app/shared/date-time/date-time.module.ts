import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateTimePipe } from './date-time.pipe';

@NgModule({
  declarations: [
    DateTimePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    DateTimePipe
  ]
})
export class DateTimeModule { }
