import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LanguageModule } from '@shared/language';
import { SelectModule } from '@shared/select';
import { NgrxFormsModule } from 'ngrx-forms';
import { PrivateLanguageSelectionComponent } from './language-selection.component';
import { LanguageSelectionFacade } from './language-selection.facade';

@NgModule({
  declarations: [
    PrivateLanguageSelectionComponent
  ],
  imports: [
    CommonModule,
    SelectModule,
    NgrxFormsModule,
    LanguageModule
  ],
  providers: [
    LanguageSelectionFacade
  ],
  exports: [
    PrivateLanguageSelectionComponent
  ]
})
export class PrivateLanguageSelectionModule { }
