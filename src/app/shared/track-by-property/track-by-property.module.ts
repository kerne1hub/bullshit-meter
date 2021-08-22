import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgForTrackByPropertyDirective } from './track-by-property.directive';

@NgModule({
  declarations: [
    NgForTrackByPropertyDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    NgForTrackByPropertyDirective
  ]
})
export class TrackByPropertyModule { }
