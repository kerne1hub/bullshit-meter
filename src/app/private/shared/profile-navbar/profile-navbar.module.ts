import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateProfileNavbarComponent } from './profile-navbar.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PrivateProfileNavbarComponent
  ],
  imports: [CommonModule, TranslateModule, RouterModule],
  providers: [],
  exports: [
    PrivateProfileNavbarComponent
  ]
})
export class PrivateProfileNavbarModule { }
