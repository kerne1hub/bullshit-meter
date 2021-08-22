import { NgrxFormsModule } from 'ngrx-forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateTopicsSelectionComponent } from './topics-selection.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormTagModule } from '@shared/form-tag';
import { TopicsSelectionFacade } from './topics-selection.facade';
import { CategoryModule } from '@shared/category';

@NgModule({
  declarations: [PrivateTopicsSelectionComponent],
  imports: [CommonModule, TranslateModule, FormTagModule, NgrxFormsModule, CategoryModule],
  providers: [TopicsSelectionFacade],
  exports: [PrivateTopicsSelectionComponent]
})
export class PrivateTopicsSelectionModule { }
