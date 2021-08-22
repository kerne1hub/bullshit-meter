import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrivateLanguageSelectionModule } from '@app/private/shared/language-selection';
import { PrivateCardModule } from '@app/private/shared/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { NgrxFormsModule } from 'ngrx-forms';
import { PrivateOnboardingSelectLanguagePageComponent } from './select-language.component';
import { PrivateOnboardingSelectLanguagePageFacade } from './select-language.facade';
import { PrivateOnboardingSelectLanguagePageRoutingModule } from './select-language.routing';
import { PrivateOnboardingSelectLanguagePageEffects, privateOnboardingSelectLanguagePageReducer } from './shared/store';

@NgModule({
  declarations: [
    PrivateOnboardingSelectLanguagePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    NgrxFormsModule,
    PrivateLanguageSelectionModule,
    PrivateCardModule,
    PrivateOnboardingSelectLanguagePageRoutingModule,
    StoreModule.forFeature('privateOnboardingSelectLanguagePage', privateOnboardingSelectLanguagePageReducer),
    EffectsModule.forFeature([PrivateOnboardingSelectLanguagePageEffects])
  ],
  providers: [
    PrivateOnboardingSelectLanguagePageFacade
  ]
})
export class PrivateOnboardingSelectLanguagePageModule { }
