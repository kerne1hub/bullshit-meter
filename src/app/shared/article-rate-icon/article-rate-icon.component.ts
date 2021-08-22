import { Component, Input } from '@angular/core';
import { ArticleRate } from '@shared/article/enums/article-rate';

@Component({
  selector: 'article-rate-icon',
  templateUrl: 'article-rate-icon.html',
  styleUrls: ['article-rate-icon.scss']
})
export class ArticleRateIconComponent {
  @Input() rate: ArticleRate;
  @Input() size: 'medium' | 'small';

  constructor() {
    this.size = 'medium';
  }
}
