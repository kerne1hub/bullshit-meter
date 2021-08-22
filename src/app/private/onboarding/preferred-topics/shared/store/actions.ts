import { createAction, props } from '@ngrx/store';

export class PrivateOnboardingPreferredTopicsPageActions {
  /* tslint:disable:typedef */
  public static initPage = createAction(
    '[PrivateOnboardingPreferredTopicsPage] Init Page'
  );

  public static resetState = createAction(
    '[PrivateOnboardingPreferredTopicsPage] Reset State'
  );

  public static prefillSelectTopicsForm = createAction(
    '[PrivateOnboardingPreferredTopicsPage] Prefill Select Topics Form',
    props<{ categories: Array<number> }>()
  );

  public static saveCategories = createAction(
    '[PrivateOnboardingPreferredTopicsPage] Save Categories',
    props<{ nextUrl: string }>()
  );
  /* tslint:enable:typedef */
}
