import { createAction, props } from '@ngrx/store';

export class PrivateOnboardingPageActions {
  /* tslint:disable:typedef */
  public static resetState = createAction(
    '[PrivateOnboardingPage] Reset State'
  );

  public static navigateToNextPage = createAction(
    '[PrivateOnboardingPage] Navigate To Next Page',
    props<{ url: string }>()
  );
  /* tslint:enable:typedef */
}
