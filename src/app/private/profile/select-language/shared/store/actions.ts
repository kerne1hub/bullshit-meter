import { createAction, props } from '@ngrx/store';

export class PrivateProfileSelectLanguagePageActions {
  /* tslint:disable:typedef */
  public static initPage = createAction(
    '[PrivateProfileSelectLanguagePage] Init Page'
  );

  public static prefillLanguageForm = createAction(
    '[PrivateProfileSelectLanguagePage] Prefill Select Language Form',
    props<{ languageID: number | null }>()
  );

  public static resetState = createAction(
    '[PrivateProfileSelectLanguagePage] Reset State'
  );

  public static saveSelectedLanguage = createAction(
    '[PrivateProfileSelectLanguagePage] Save selected language'
  );
  /* tslint:enable:typedef */
}
