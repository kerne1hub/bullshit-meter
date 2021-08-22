import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrivateProfileStatisticsPageFacade } from './statistics.facade';
import { Observable } from 'rxjs';
import { ArticleRate } from '@shared/article/enums/article-rate';

@Component({
  selector: 'private-profile-statistics-page',
  templateUrl: 'statistics.html',
  styleUrls: ['statistics.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateProfileStatisticsPageComponent {
  public isLoading$: Observable<boolean>;

  public options: Array<any> = new Array(5); // TODO

  constructor(
    private facade: PrivateProfileStatisticsPageFacade
  ) {
    this.isLoading$ = this.facade.isLoading$;
    this.options.fill({
      title: 'The West is ready to fulfill the cherished dream of millions',
      rate: ArticleRate.TRUTH
    });
  }
}
