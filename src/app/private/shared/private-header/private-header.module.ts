import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateHeaderComponent } from './private-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { PrivateHeaderFacade } from '@app/private/shared/private-header/private-header.facade';
import { RouterModule } from '@angular/router';
import { AvatarModule } from '@shared/avatar';

@NgModule({
  declarations: [
    PrivateHeaderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    AvatarModule
  ],
  providers: [
    PrivateHeaderFacade
  ],
  exports: [
    PrivateHeaderComponent
  ]
})
export class PrivateHeaderModule { }
