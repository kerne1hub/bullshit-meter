import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TagComponent } from './tag.component';

@NgModule({
  declarations: [TagComponent],
  imports: [CommonModule],
  providers: [],
  exports: [TagComponent]
})
export class TagModule { }
