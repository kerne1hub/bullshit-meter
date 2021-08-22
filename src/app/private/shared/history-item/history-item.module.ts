import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateHistoryItemComponent } from './history-item.component';
import { ArticleRateIconModule } from '@app/shared/article-rate-icon';

@NgModule({
  declarations: [
    PrivateHistoryItemComponent
  ],
  imports: [CommonModule, ArticleRateIconModule],
  providers: [],
  exports: [
    PrivateHistoryItemComponent
  ]
})
export class PrivateHistoryItemModule { }
