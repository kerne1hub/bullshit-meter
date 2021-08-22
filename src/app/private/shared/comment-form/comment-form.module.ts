import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateCommentFormComponent } from './comment-form.component';
import { FormGroupInputModule } from '@shared/form-group-input';
import { NgrxFormsModule } from 'ngrx-forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PrivateCommentFormComponent
  ],
  imports: [
    CommonModule,
    FormGroupInputModule,
    NgrxFormsModule,
    TranslateModule
  ],
  providers: [],
  exports: [
    PrivateCommentFormComponent
  ]
})
export class PrivateCommentFormModule { }
