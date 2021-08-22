import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateOnboardingPageComponent } from './onboarding.component';
import { PrivateOnboardingPageRoutingModule } from './onboarding.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { privateOnboardingPageReducer, PrivateOnboardingPageEffects } from './shared/store';
import { PrivateOnboardingPageFacade } from './onboarding.facade';
import { PrivateOnboardingSidebarComponent } from './shared/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    PrivateOnboardingPageComponent,
    PrivateOnboardingSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PrivateOnboardingPageRoutingModule,
    StoreModule.forFeature('privateOnboardingPage', privateOnboardingPageReducer),
    EffectsModule.forFeature([PrivateOnboardingPageEffects])
  ],
  providers: [
    PrivateOnboardingPageFacade
  ]
})
export class PrivateOnboardingPageModule { }
