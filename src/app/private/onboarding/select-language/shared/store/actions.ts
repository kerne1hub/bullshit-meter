import { createAction, props } from '@ngrx/store';

export class PrivateOnboardingSelectLanguagePageActions {
  /* tslint:disable:typedef */
  public static initPage = createAction(
    '[PrivateOnboardingSelectLanguagePage] Init Page'
  );

  public static prefillLanguageForm = createAction(
    '[PrivateOnboardingSelectLanguagePage] Prefill Select Language Form',
    props<{ languageID: number | null }>()
  );

  public static resetState = createAction(
    '[PrivateOnboardingSelectLanguagePage] Reset State'
  );

  public static saveSelectedLanguage = createAction(
    '[PrivateOnboardingSelectLanguagePage] Save Selected Language',
    props<{ nextUrl: string }>()
  );
  /* tslint:enable:typedef */
}
