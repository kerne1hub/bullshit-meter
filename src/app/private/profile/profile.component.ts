import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrivateProfilePageFacade } from './profile.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'private-profile-page',
  templateUrl: 'profile.html',
  styleUrls: ['profile.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateProfilePageComponent {
  public isLoading$: Observable<boolean>;

  constructor(
    private facade: PrivateProfilePageFacade
  ) {
    this.isLoading$ = this.facade.isLoading$;
  }
}
