import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrivateOnboardingPageFacade } from './onboarding.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'private-onboarding-page',
  templateUrl: 'onboarding.html',
  styleUrls: ['onboarding.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateOnboardingPageComponent {
  public isLoading$: Observable<boolean>;

  constructor(
    private facade: PrivateOnboardingPageFacade
  ) {
    this.isLoading$ = this.facade.isLoading$;
  }
}
