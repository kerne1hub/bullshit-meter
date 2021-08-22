import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateProfilePreferredTopicsPageComponent } from './preferred-topics.component';
import { PrivateProfilePreferredTopicsPageRoutingModule } from './preferred-topics.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { privateProfilePreferredTopicsPageReducer, PrivateProfilePreferredTopicsPageEffects } from './shared/store';
import { PrivateProfilePreferredTopicsPageFacade } from './preferred-topics.facade';
import { PrivateNavbarModule } from '@app/private/shared/navbar';
import { PrivateCardModule } from '@app/private/shared/card';
import { PrivateTopicsSelectionModule } from '@app/private/shared/topics-selection';

@NgModule({
  declarations: [
    PrivateProfilePreferredTopicsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PrivateProfilePreferredTopicsPageRoutingModule,
    StoreModule.forFeature('privateProfilePreferredTopicsPage', privateProfilePreferredTopicsPageReducer),
    EffectsModule.forFeature([PrivateProfilePreferredTopicsPageEffects]),
    PrivateNavbarModule,
    PrivateCardModule,
    PrivateTopicsSelectionModule
  ],
  providers: [
    PrivateProfilePreferredTopicsPageFacade
  ]
})
export class PrivateProfilePreferredTopicsPageModule { }
