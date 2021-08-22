import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    DropdownDirective
  ]
})
export class DropdownModule { }
