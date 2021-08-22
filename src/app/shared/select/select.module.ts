import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectComponent } from './select.component';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from '@shared/dropdown';

@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [CommonModule, TranslateModule, DropdownModule],
  providers: [],
  exports: [
    SelectComponent
  ]
})
export class SelectModule { }
