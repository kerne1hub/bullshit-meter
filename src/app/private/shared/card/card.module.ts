import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateCardComponent } from './card.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PrivateCardComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  providers: [],
  exports: [
    PrivateCardComponent
  ]
})
export class PrivateCardModule { }
