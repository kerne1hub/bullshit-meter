import { NgrxFormsModule } from 'ngrx-forms';
import { PrivateTopicsSelectionModule } from '@app/private/shared/topics-selection';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateOnboardingPreferredTopicsPageComponent } from './preferred-topics.component';
import { PrivateOnboardingPreferredTopicsPageRoutingModule } from './preferred-topics.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { privateOnboardingPreferredTopicsPageReducer, PrivateOnboardingPreferredTopicsPageEffects } from './shared/store';
import { PrivateOnboardingPreferredTopicsPageFacade } from './preferred-topics.facade';
import { PrivateCardModule } from '@app/private/shared/card';

@NgModule({
  declarations: [
    PrivateOnboardingPreferredTopicsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    NgrxFormsModule,
    PrivateCardModule,
    PrivateTopicsSelectionModule,
    PrivateOnboardingPreferredTopicsPageRoutingModule,
    StoreModule.forFeature('privateOnboardingPreferredTopicsPage', privateOnboardingPreferredTopicsPageReducer),
    EffectsModule.forFeature([PrivateOnboardingPreferredTopicsPageEffects])
  ],
  providers: [
    PrivateOnboardingPreferredTopicsPageFacade
  ]
})
export class PrivateOnboardingPreferredTopicsPageModule { }
