import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarComponent } from './avatar.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AvatarComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  providers: [],
  exports: [
    AvatarComponent
  ]
})
export class AvatarModule { }
