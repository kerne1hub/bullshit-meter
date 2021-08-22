import { PrivateOnboardingPreferredTopicsPageSelectors } from '@app/private/onboarding/preferred-topics/shared/store';
import { PrivateOnboardingCreateProfilePageSelectors } from '@app/private/onboarding/create-profile/shared/store';
import { PrivateOnboardingSelectLanguagePageSelectors } from '@app/private/onboarding/select-language/shared/store';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PrivateOnboardingPageSelectors } from './shared/store';
import { AppState } from '@shared/store';

@Injectable()
export class PrivateOnboardingPageFacade {
  public get isLoading$(): Observable<boolean> {
    return this.store.select(PrivateOnboardingPageSelectors.isLoading);
  }

  public get isLanguageSelectionFormValid$(): Observable<boolean> {
    return this.store.select(PrivateOnboardingSelectLanguagePageSelectors.languageSelectionForm).pipe(
      map((formState) => formState.isValid)
    );
  }

  public get isTopicsSelectionFormValid$(): Observable<boolean> {
    return this.store.select(PrivateOnboardingPreferredTopicsPageSelectors.topicsSelectionForm).pipe(
      map((formState) => formState.isValid)
    );
  }

  public get isProfileCreationFormValid$(): Observable<boolean> {
    return this.store.select(PrivateOnboardingCreateProfilePageSelectors.createProfileForm).pipe(
      map((formState) => formState.isValid)
    );
  }

  constructor(private store: Store<AppState>) {}
}
