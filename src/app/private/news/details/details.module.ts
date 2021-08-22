import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateNewsDetailsPageComponent } from './details.component';
import { PrivateNewsDetailsPageRoutingModule } from './details.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { privateNewsDetailsPageReducer, PrivateNewsDetailsPageEffects } from './shared/store';
import { PrivateNewsDetailsPageFacade } from './details.facade';
import { PrivateNewsItemModule } from '@app/private/shared/news-item';
import { PrivateNavbarModule } from '@app/private/shared/navbar';
import { PrivateNewsDetailsCommentComponent } from './shared/components/comment/comment.component';
import { PrivateNewsDetailsCommentsComponent } from './shared/components/comments/comments.component';
import { AvatarModule } from '@shared/avatar';
import { NgrxFormsModule } from 'ngrx-forms';
import { PrivateCommentFormModule } from '@app/private/shared/comment-form';
import { TrackByPropertyModule } from '@shared/track-by-property';
import { DateTimeModule } from '@shared/date-time';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    PrivateNewsDetailsPageComponent,
    PrivateNewsDetailsCommentComponent,
    PrivateNewsDetailsCommentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PrivateNewsDetailsPageRoutingModule,
    StoreModule.forFeature('privateNewsDetailsPage', privateNewsDetailsPageReducer),
    EffectsModule.forFeature([PrivateNewsDetailsPageEffects]),
    PrivateNewsItemModule,
    PrivateNavbarModule,
    AvatarModule,
    NgrxFormsModule,
    PrivateCommentFormModule,
    TrackByPropertyModule,
    DateTimeModule,
    InfiniteScrollModule
  ],
  exports: [
    PrivateNewsDetailsCommentComponent
  ],
  providers: [
    PrivateNewsDetailsPageFacade
  ]
})
export class PrivateNewsDetailsPageModule { }
