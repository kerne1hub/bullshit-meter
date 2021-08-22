import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateMenubarComponent } from './menubar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { AvatarModule } from '@shared/avatar';
import { FormTagModule } from '@shared/form-tag';
import { TrackByPropertyModule } from '@shared/track-by-property';
import { TagModule } from '@shared/tag';
import { MenubarFacade } from './menubar.facade';

@NgModule({
  declarations: [
    PrivateMenubarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    AvatarModule,
    FormTagModule,
    TrackByPropertyModule,
    TagModule
  ],
  providers: [MenubarFacade],
  exports: [
    PrivateMenubarComponent
  ]
})
export class PrivateMenubarModule {
}
