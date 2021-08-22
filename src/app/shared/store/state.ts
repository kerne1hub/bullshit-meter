import { RouterReducerState } from '@ngrx/router-store';

import { PrivateNewsPageState } from '@app/private/news/shared/store';
import { PrivateProfilePageState } from '@app/private/profile/shared/store';
import { PrivateOnboardingPageState } from '@app/private/onboarding/shared/store';
import { PrivateOnboardingSelectLanguagePageState } from '@app/private/onboarding/select-language/shared/store';
import { PrivateOnboardingCreateProfilePageState } from '@app/private/onboarding/create-profile/shared/store';
import { PrivateOnboardingPreferredTopicsPageState } from '@app/private/onboarding/preferred-topics/shared/store';
import { PrivateProfileSettingsPageState } from '@app/private/profile/settings/shared/store';
import { PrivateProfileStatisticsPageState } from '@app/private/profile/statistics/shared/store';
import { PublicSignInPageState } from '@app/public/sign-in/shared/store';
import { PrivateNewsDetailsPageState } from '@app/private/news/details/shared/store';
import { PrivateProfileChangeNamePageState } from '@app/private/profile/change-name/shared/store';
import { PrivateProfileSelectLanguagePageState } from '@app/private/profile/select-language/shared/store';
import { PrivateProfilePreferredTopicsPageState } from '@app/private/profile/preferred-topics/shared/store';

export class AppState {
  public router: RouterReducerState<any>;
  public privateNewsPage?: PrivateNewsPageState;
  public privateProfilePage?: PrivateProfilePageState;
  public privateOnboardingPage?: PrivateOnboardingPageState;
  public privateOnboardingSelectLanguagePage?: PrivateOnboardingSelectLanguagePageState;
  public privateOnboardingCreateProfilePage?: PrivateOnboardingCreateProfilePageState;
  public privateOnboardingPreferredTopicsPage?: PrivateOnboardingPreferredTopicsPageState;
  public privateProfileSettingsPage?: PrivateProfileSettingsPageState;
  public privateProfileStatisticsPage?: PrivateProfileStatisticsPageState;
  public publicSignInPage?: PublicSignInPageState;
  public privateNewsDetailsPage?: PrivateNewsDetailsPageState;
  public privateProfileChangeNamePage?: PrivateProfileChangeNamePageState;
  public privateProfileSelectLanguagePage?: PrivateProfileSelectLanguagePageState;
  public privateProfilePreferredTopicsPage?: PrivateProfilePreferredTopicsPageState;
}
