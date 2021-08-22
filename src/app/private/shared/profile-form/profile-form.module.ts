import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateProfileFormComponent } from './profile-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormGroupInputModule } from '@shared/form-group-input';
import { NgrxFormsModule } from 'ngrx-forms';

@NgModule({
  declarations: [PrivateProfileFormComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormGroupInputModule,
    NgrxFormsModule
  ],
  providers: [],
  exports: [PrivateProfileFormComponent]
})
export class PrivateProfileFormModule { }
