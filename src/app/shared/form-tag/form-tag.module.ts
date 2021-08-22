import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormTagComponent } from './form-tag.component';
import { TagModule } from '@app/shared/tag';
import { TrackByPropertyModule } from '@shared/track-by-property';

@NgModule({
  declarations: [FormTagComponent],
  imports: [CommonModule, TagModule, TrackByPropertyModule],
  providers: [],
  exports: [FormTagComponent]
})
export class FormTagModule { }
