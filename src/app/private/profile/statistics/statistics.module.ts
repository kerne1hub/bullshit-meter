import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateProfileStatisticsPageComponent } from './statistics.component';
import { PrivateProfileStatisticsPageRoutingModule } from './statistics.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { privateProfileStatisticsPageReducer, PrivateProfileStatisticsPageEffects } from './shared/store';
import { PrivateProfileStatisticsPageFacade } from './statistics.facade';
import { PrivateProfileNavbarModule } from '@app/private/shared/profile-navbar';
import { PrivateMenubarModule } from '@app/private/shared/menubar';
import { PrivateHistoryItemModule } from '@app/private/shared/history-item';
import { PrivateStatisticsSelectModule } from '@app/private/shared/statistics-select';

@NgModule({
  declarations: [
    PrivateProfileStatisticsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PrivateMenubarModule,
    PrivateProfileNavbarModule,
    PrivateMenubarModule,
    PrivateHistoryItemModule,
    PrivateProfileStatisticsPageRoutingModule,
    PrivateStatisticsSelectModule,
    StoreModule.forFeature('privateProfileStatisticsPage', privateProfileStatisticsPageReducer),
    EffectsModule.forFeature([PrivateProfileStatisticsPageEffects])
  ],
  providers: [
    PrivateProfileStatisticsPageFacade
  ]
})
export class PrivateProfileStatisticsPageModule { }
