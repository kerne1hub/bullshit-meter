import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateProfileChangeNamePageComponent } from './change-name.component';
import { PrivateProfileChangeNamePageRoutingModule } from './change-name.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { privateProfileChangeNamePageReducer, PrivateProfileChangeNamePageEffects } from './shared/store';
import { PrivateProfileChangeNamePageFacade } from './change-name.facade';
import { PrivateCardModule } from '@app/private/shared/card';
import { PrivateProfileFormModule } from '@app/private/shared/profile-form';
import { PrivateNavbarModule } from '@app/private/shared/navbar';

@NgModule({
  declarations: [
    PrivateProfileChangeNamePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PrivateProfileChangeNamePageRoutingModule,
    StoreModule.forFeature('privateProfileChangeNamePage', privateProfileChangeNamePageReducer),
    EffectsModule.forFeature([PrivateProfileChangeNamePageEffects]),
    PrivateProfileFormModule,
    PrivateCardModule,
    PrivateNavbarModule
  ],
  providers: [
    PrivateProfileChangeNamePageFacade
  ]
})
export class PrivateProfileChangeNamePageModule { }
