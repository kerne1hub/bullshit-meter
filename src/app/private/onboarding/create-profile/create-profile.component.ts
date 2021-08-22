import { FormGroupState } from 'ngrx-forms';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { PrivateOnboardingCreateProfilePageFacade } from './create-profile.facade';
import { Observable } from 'rxjs';
import { User } from '@shared/user';
import { ProfileForm } from '@app/private/shared/forms';

@Component({
  selector: 'private-onboarding-create-profile-page',
  templateUrl: 'create-profile.html',
  styleUrls: ['create-profile.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateOnboardingCreateProfilePageComponent implements OnInit {
  public profile$: Observable<User>;
  public isLoading$: Observable<boolean>;
  public createProfileForm$: Observable<FormGroupState<ProfileForm>>;

  constructor(
    private facade: PrivateOnboardingCreateProfilePageFacade
  ) {
    this.profile$ = this.facade.profile$;
    this.isLoading$ = this.facade.isLoading$;
    this.createProfileForm$ = this.facade.createProfileForm$;
  }

  public updateProfile(nextUrl: string): void {
    this.facade.updateProfile(nextUrl);
  }

  public uploadAvatar(file: File): void {
    this.facade.uploadAvatar(file);
  }

  public ngOnInit(): void {
    this.facade.initPage();
  }
}
