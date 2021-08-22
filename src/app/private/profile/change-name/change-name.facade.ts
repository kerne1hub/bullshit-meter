import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PrivateProfileChangeNamePageActions, PrivateProfileChangeNamePageSelectors } from './shared/store';
import { AppState } from '@shared/store';
import { FormGroupState } from 'ngrx-forms';
import { User } from '@shared/user';
import { ProfileService } from '@shared/profile';
import { ProfileForm } from '@app/private/shared/forms';

@Injectable()
export class PrivateProfileChangeNamePageFacade {
  public get isLoading$(): Observable<boolean> {
    return this.store.select(PrivateProfileChangeNamePageSelectors.isLoading);
  }

  public get profileForm$(): Observable<FormGroupState<ProfileForm>> {
    return this.store.select(PrivateProfileChangeNamePageSelectors.profileForm);
  }

  public get profile$(): Observable<User> {
    return this.profileService.profile$;
  }

  constructor(
    private store: Store<AppState>,
    private profileService: ProfileService
  ) { }

  public updateProfile(): void {
    this.store.dispatch(PrivateProfileChangeNamePageActions.updateProfile());
  }

  public initPage(): void {
    this.store.dispatch(PrivateProfileChangeNamePageActions.initPage());
  }
}
