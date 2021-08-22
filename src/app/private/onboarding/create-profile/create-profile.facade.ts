import { FormGroupState } from 'ngrx-forms';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PrivateOnboardingCreateProfilePageSelectors, PrivateOnboardingCreateProfilePageActions } from './shared/store';
import { AppState } from '@shared/store';
import { ProfileService } from '@shared/profile';
import { User } from '@shared/user';
import { ProfileForm } from '@app/private/shared/forms';

@Injectable()
export class PrivateOnboardingCreateProfilePageFacade {
  public get isLoading$(): Observable<boolean> {
    return this.store.select(PrivateOnboardingCreateProfilePageSelectors.isLoading);
  }

  public get createProfileForm$(): Observable<FormGroupState<ProfileForm>> {
    return this.store.select(PrivateOnboardingCreateProfilePageSelectors.createProfileForm);
  }

  public get profile$(): Observable<User> {
    return this.profileService.profile$;
  }

  constructor(
    private store: Store<AppState>,
    private profileService: ProfileService
  ) { }

  public updateProfile(nextUrl: string): void {
    this.store.dispatch(PrivateOnboardingCreateProfilePageActions.updateProfile({ nextUrl }));
  }

  public uploadAvatar(file: File): void {
    this.store.dispatch(PrivateOnboardingCreateProfilePageActions.uploadAvatar({ file }));
  }

  public initPage(): void {
    this.store.dispatch(PrivateOnboardingCreateProfilePageActions.initPage());
  }
}
