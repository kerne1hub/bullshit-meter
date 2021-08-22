import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormGroupInputComponent } from './form-group-input.component';
import { NgrxFormsModule } from 'ngrx-forms';

@NgModule({
  declarations: [
    FormGroupInputComponent
  ],
  imports: [
    CommonModule,
    NgrxFormsModule
  ],
  providers: [],
  exports: [
    FormGroupInputComponent
  ]
})
export class FormGroupInputModule { }
