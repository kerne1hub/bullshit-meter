import { NewsItemFacade } from './news-item.facade';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateNewsItemComponent } from './news-item.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ArticleRateTranslationModule } from '@shared/article-rate-translation';
import { ArticleRateIconModule } from '@shared/article-rate-icon';
import { TagModule } from '@shared/tag';
import { DateTimeModule } from '@shared/date-time';

@NgModule({
  declarations: [
    PrivateNewsItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ArticleRateTranslationModule,
    ArticleRateIconModule,
    TagModule,
    DateTimeModule
  ],
  providers: [NewsItemFacade],
  exports: [
    PrivateNewsItemComponent
  ]
})
export class PrivateNewsItemModule { }
