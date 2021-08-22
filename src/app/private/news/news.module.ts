import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateNewsPageComponent } from './news.component';
import { PrivateNewsPageRoutingModule } from './news.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { privateNewsPageReducer, PrivateNewsPageEffects } from './shared/store';
import { PrivateNewsPageFacade } from './news.facade';
import { PrivateMenubarModule } from '@app/private/shared/menubar';
import { PrivateNewsItemModule } from '@app/private/shared/news-item';
import { TrackByPropertyModule } from '@shared/track-by-property';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    PrivateNewsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PrivateNewsPageRoutingModule,
    StoreModule.forFeature('privateNewsPage', privateNewsPageReducer),
    EffectsModule.forFeature([PrivateNewsPageEffects]),
    PrivateMenubarModule,
    PrivateNewsItemModule,
    TrackByPropertyModule,
    InfiniteScrollModule
  ],
  providers: [
    PrivateNewsPageFacade
  ]
})
export class PrivateNewsPageModule { }
