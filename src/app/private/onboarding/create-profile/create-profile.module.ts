import { ProfileModule } from '@shared/profile';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateOnboardingCreateProfilePageComponent } from './create-profile.component';
import { PrivateOnboardingCreateProfilePageRoutingModule } from './create-profile.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { privateOnboardingCreateProfilePageReducer, PrivateOnboardingCreateProfilePageEffects } from './shared/store';
import { PrivateCardModule } from '@app/private/shared/card';
import { AvatarModule } from '@app/shared/avatar';
import { PrivateProfileFormModule } from '@app/private/shared/profile-form';
import { NgrxFormsModule } from 'ngrx-forms';
import { PrivateOnboardingCreateProfilePageFacade } from './create-profile.facade';

@NgModule({
  declarations: [
    PrivateOnboardingCreateProfilePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    AvatarModule,
    NgrxFormsModule,
    ProfileModule,
    PrivateCardModule,
    PrivateProfileFormModule,
    PrivateOnboardingCreateProfilePageRoutingModule,
    StoreModule.forFeature('privateOnboardingCreateProfilePage', privateOnboardingCreateProfilePageReducer),
    EffectsModule.forFeature([PrivateOnboardingCreateProfilePageEffects])
  ],
  providers: [PrivateOnboardingCreateProfilePageFacade]
})
export class PrivateOnboardingCreateProfilePageModule { }
