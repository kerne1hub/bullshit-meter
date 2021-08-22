import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PublicSignInPageComponent } from './sign-in.component';
import { PublicSignInPageRoutingModule } from './sign-in.routing';
import { PublicSignInPageFacade } from './sign-in.facade';
import { PublicSignInPageEffects, publicSignInPageReducer } from './shared/store';

@NgModule({
  declarations: [
    PublicSignInPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PublicSignInPageRoutingModule,
    StoreModule.forFeature('publicSignInPage', publicSignInPageReducer),
    EffectsModule.forFeature([PublicSignInPageEffects])
  ],
  providers: [
    PublicSignInPageFacade
  ]
})
export class PublicSignInPageModule { }
