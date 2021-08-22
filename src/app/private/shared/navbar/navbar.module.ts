import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateNavbarComponent } from './navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PrivateNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  providers: [],
  exports: [
    PrivateNavbarComponent
  ]
})
export class PrivateNavbarModule { }
