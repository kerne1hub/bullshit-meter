import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { PrivateOnboardingPreferredTopicsPageFacade } from './preferred-topics.facade';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';
import { SelectTopicsForm } from '@app/private/shared/forms';

@Component({
  selector: 'private-onboarding-preferred-topics-page',
  templateUrl: 'preferred-topics.html',
  styleUrls: ['preferred-topics.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateOnboardingPreferredTopicsPageComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public topicsSelectionForm$: Observable<FormGroupState<SelectTopicsForm>>;

  constructor(private facade: PrivateOnboardingPreferredTopicsPageFacade) {
    this.isLoading$ = this.facade.isLoading$;
    this.topicsSelectionForm$ = this.facade.topicsSelection$;
  }

  public saveCategories(nextUrl: string): void {
    this.facade.saveCategories(nextUrl);
  }

  public ngOnInit(): void {
    this.facade.onInit();
  }
}
