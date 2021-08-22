import { Observable } from 'rxjs';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrivateOnboardingPageFacade } from '@app/private/onboarding/onboarding.facade';

@Component({
  selector: 'onboarding-sidebar',
  templateUrl: 'sidebar.html',
  styleUrls: ['sidebar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateOnboardingSidebarComponent {
  public isLanguageFormValid$: Observable<boolean>;
  public isProfileFormValid$: Observable<boolean>;

  constructor(private facade: PrivateOnboardingPageFacade) {
    this.isLanguageFormValid$ = this.facade.isLanguageSelectionFormValid$;
    this.isProfileFormValid$ = this.facade.isProfileCreationFormValid$;
  }
}
