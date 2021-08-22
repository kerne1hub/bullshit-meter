import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ArticleRate } from '@shared/article/enums/article-rate';

@Component({
  selector: 'history-item',
  templateUrl: 'history-item.html',
  styleUrls: ['history-item.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateHistoryItemComponent {
  @Input() title: string;
  @Input() rate: ArticleRate;

  public get articleRate(): typeof ArticleRate {
    return ArticleRate;
  }
}
