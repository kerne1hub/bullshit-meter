import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrivateHeaderFacade } from './private-header.facade';
import { Observable } from 'rxjs';
import { User } from '@shared/user';

@Component({
  selector: 'private-header',
  templateUrl: 'private-header.html',
  styleUrls: ['private-header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateHeaderComponent {
  public isProfilePage$: Observable<boolean>;
  public isMainPage$: Observable<boolean>;
  public profile$: Observable<User>;

  constructor(
    private facade: PrivateHeaderFacade
  ) {
    this.isProfilePage$ = this.facade.isProfilePage$;
    this.isMainPage$ = this.facade.isMainPage$;
    this.profile$ = this.facade.profile$;
  }

  public logout(): void {
    this.facade.logout();
  }
}
