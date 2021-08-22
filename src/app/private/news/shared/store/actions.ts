import { createAction, props } from '@ngrx/store';
import { Article, ArticlesFilters, ArticleRate } from '@shared/article';
import { HttpErrorResponse } from '@angular/common/http';
import { PaginationResponse } from '@shared/pagination';

export class PrivateNewsPageActions {
  /* tslint:disable:typedef */
  public static resetState = createAction(
    '[PrivateNewsPage] Reset State'
  );

  public static initPage = createAction(
    '[PrivateNewsPage] Init page'
  );

  public static changeFilters = createAction(
    '[PrivateNewsPage] Change filters',
    props<{ filters: ArticlesFilters }>()
  );

  public static loadItems = createAction(
    '[PrivateNewsPage] Load items'
  );

  public static loadItemsSuccess = createAction(
    '[PrivateNewsPage] Load items success',
    props<{ response: PaginationResponse<Article> }>()
  );

  public static loadItemsFailure = createAction(
    '[PrivateNewsPage] Load items failure',
    props<{ response: HttpErrorResponse }>()
  );

  public static loadNextPage = createAction(
    '[PrivateNewsPage] Load next page'
  );

  public static rateItem = createAction(
    '[PrivateNewsPage] Rate item',
    props<{ id: number; rate: ArticleRate }>()
  );

  public static rateItemSuccess = createAction(
    '[PrivateNewsPage] Rate item success',
    props<{ id: number }>()
  );

  public static rateItemFailure = createAction(
    '[PrivateNewsPage] Rate item failure',
    props<{ response: HttpErrorResponse }>()
  );

  public static loadItem = createAction(
    '[PrivateNewsPage] Load item',
    props<{ id: number }>()
  );

  public static loadItemSuccess = createAction(
    '[PrivateNewsPage] Load item success',
    props<{ response: Article }>()
  );

  public static loadItemFailure = createAction(
    '[PrivateNewsPage] Load item failure',
    props<{ response: HttpErrorResponse }>()
  );
  /* tslint:enable:typedef */
}
