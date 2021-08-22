import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrivateProfileSettingsPageFacade } from './settings.facade';
import { Observable } from 'rxjs';
import { User } from '@shared/user';

@Component({
  selector: 'private-profile-settings-page',
  templateUrl: 'settings.html',
  styleUrls: ['settings.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateProfileSettingsPageComponent {
  public isLoading$: Observable<boolean>;
  public profile$: Observable<User>;
  public selectedLanguageTitle$: Observable<string | undefined>;
  public loginService: string;

  constructor(
    private facade: PrivateProfileSettingsPageFacade
  ) {
    this.isLoading$ = this.facade.isLoading$;
    this.profile$ = this.facade.profile$;
    this.selectedLanguageTitle$ = this.facade.selectedLanguageTitle$;
    this.loginService = this.facade.loginService;
  }

  public uploadAvatar(file: File): void {
    this.facade.uploadAvatar(file);
  }
}
