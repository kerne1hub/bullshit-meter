import { createAction, props } from '@ngrx/store';

export class PrivateProfilePreferredTopicsPageActions {
  /* tslint:disable:typedef */
  public static initPage = createAction(
    '[PrivateProfilePreferredTopicsPage] Init Page'
  );

  public static resetState = createAction(
    '[PrivateProfilePreferredTopicsPage] Reset State'
  );

  public static prefillSelectTopicsForm = createAction(
    '[PrivateProfilePreferredTopicsPage] Prefill Select Topics Form',
    props<{ categories: Array<number> }>()
  );

  public static saveCategories = createAction(
    '[PrivateProfilePreferredTopicsPage] Save Categories'
  );
  /* tslint:enable:typedef */
}
