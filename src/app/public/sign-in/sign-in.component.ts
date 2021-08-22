import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PublicSignInPageFacade } from './sign-in.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'public-sign-in-page',
  templateUrl: 'sign-in.html',
  styleUrls: ['sign-in.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicSignInPageComponent {
  public isLoading$: Observable<boolean>;

  constructor(
    private facade: PublicSignInPageFacade
  ) {
    this.isLoading$ = this.facade.isLoading$;
  }

  public googleLogin(): void {
    this.facade.googleLogin();
  }
}
