import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateProfilePageComponent } from './profile.component';
import { PrivateProfilePageRoutingModule } from './profile.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { privateProfilePageReducer, PrivateProfilePageEffects } from './shared/store';
import { PrivateProfilePageFacade } from './profile.facade';

@NgModule({
  declarations: [
    PrivateProfilePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PrivateProfilePageRoutingModule,
    StoreModule.forFeature('privateProfilePage', privateProfilePageReducer),
    EffectsModule.forFeature([PrivateProfilePageEffects])
  ],
  providers: [
    PrivateProfilePageFacade
  ]
})
export class PrivateProfilePageModule { }
