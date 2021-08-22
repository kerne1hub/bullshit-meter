import { Pipe, PipeTransform } from '@angular/core';
import { ArticleRate } from '@shared/article/enums/article-rate';
import { TranslatePipe } from '@ngx-translate/core';

@Pipe({
  name: 'articleRateTranslation'
})
export class ArticleRateTranslationPipe implements PipeTransform {
  constructor(private translationPipe: TranslatePipe) {}

  public transform(value: ArticleRate): string {
    return this.translationPipe.transform(`SHARED.ARTICLE_RATE_TRANSLATION.TEXT_${value.toUpperCase()}`);
  }
}
