import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateProfileSettingsPageComponent } from './settings.component';
import { PrivateProfileSettingsPageRoutingModule } from './settings.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { privateProfileSettingsPageReducer, PrivateProfileSettingsPageEffects } from './shared/store';
import { PrivateProfileSettingsPageFacade } from './settings.facade';
import { PrivateProfileNavbarModule } from '@app/private/shared/profile-navbar';
import { AvatarModule } from '@app/shared/avatar';
import { PrivateMenubarModule } from '@app/private/shared/menubar';

@NgModule({
  declarations: [PrivateProfileSettingsPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    AvatarModule,
    TranslateModule,
    PrivateMenubarModule,
    PrivateProfileNavbarModule,
    PrivateProfileSettingsPageRoutingModule,
    StoreModule.forFeature('privateProfileSettingsPage', privateProfileSettingsPageReducer),
    EffectsModule.forFeature([PrivateProfileSettingsPageEffects])
  ],
  providers: [
    PrivateProfileSettingsPageFacade
  ]
})
export class PrivateProfileSettingsPageModule { }
