import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateProfileSelectLanguagePageComponent } from './select-language.component';
import { PrivateProfileSelectLanguagePageRoutingModule } from './select-language.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { privateProfileSelectLanguagePageReducer, PrivateProfileSelectLanguagePageEffects } from './shared/store';
import { PrivateProfileSelectLanguagePageFacade } from './select-language.facade';
import { PrivateNavbarModule } from '@app/private/shared/navbar';
import { PrivateCardModule } from '@app/private/shared/card';
import { PrivateLanguageSelectionModule } from '@app/private/shared/language-selection';

@NgModule({
  declarations: [
    PrivateProfileSelectLanguagePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PrivateProfileSelectLanguagePageRoutingModule,
    StoreModule.forFeature('privateProfileSelectLanguagePage', privateProfileSelectLanguagePageReducer),
    EffectsModule.forFeature([PrivateProfileSelectLanguagePageEffects]),
    PrivateNavbarModule,
    PrivateCardModule,
    PrivateLanguageSelectionModule
  ],
  providers: [
    PrivateProfileSelectLanguagePageFacade
  ]
})
export class PrivateProfileSelectLanguagePageModule { }
