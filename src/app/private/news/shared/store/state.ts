import { Article, ArticlesFilters } from '@shared/article/models';

export class PrivateNewsPageState {
  public isLoading: boolean;
  public items: Array<Article>;
  public filters: ArticlesFilters;
  public nextPage: number;

  constructor() {
    this.isLoading = false;
    this.items = [];
    this.filters = new ArticlesFilters({});
    this.nextPage = 1;
  }
}
