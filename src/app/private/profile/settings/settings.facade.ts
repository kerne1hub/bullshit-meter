import { ProfileService } from '@shared/profile';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PrivateProfileSettingsPageActions, PrivateProfileSettingsPageSelectors } from './shared/store';
import { AppState } from '@shared/store';
import { User } from '@shared/user';
import * as locale from 'locale-codes';
import { map } from 'rxjs/operators';

@Injectable()
export class PrivateProfileSettingsPageFacade {
  public get isLoading$(): Observable<boolean> {
    return this.store.select(PrivateProfileSettingsPageSelectors.isLoading);
  }

  public get selectedLanguageTitle$(): Observable<string | undefined> {
    return this.profileService.selectedLanguage$.pipe(
      map((language) => locale.where('tag', language?.code)?.name || language?.code.toUpperCase())
    );
  }

  public get profile$(): Observable<User> {
    return this.profileService.profile$;
  }

  public get loginService(): string {
    return this.profileService.loginService;
  }

  constructor(
    private store: Store<AppState>,
    private profileService: ProfileService
  ) { }

  public uploadAvatar(file: File): void {
    this.store.dispatch(PrivateProfileSettingsPageActions.uploadAvatar({ file }));
  }
}
