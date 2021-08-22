import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { PrivateProfileChangeNamePageFacade } from './change-name.facade';
import { Observable } from 'rxjs';
import { User } from '@shared/user';
import { FormGroupState } from 'ngrx-forms';
import { ProfileForm } from '@app/private/shared/forms';

@Component({
  selector: 'private-profile-change-name-page',
  templateUrl: 'change-name.html',
  styleUrls: ['change-name.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateProfileChangeNamePageComponent implements OnInit {
  public profile$: Observable<User>;
  public isLoading$: Observable<boolean>;
  public profileForm$: Observable<FormGroupState<ProfileForm>>;

  constructor(
    private facade: PrivateProfileChangeNamePageFacade
  ) {
    this.profile$ = this.facade.profile$;
    this.isLoading$ = this.facade.isLoading$;
    this.profileForm$ = this.facade.profileForm$;
  }

  public ngOnInit(): void {
    this.facade.initPage();
  }

  public updateProfile(): void {
    this.facade.updateProfile();
  }
}
