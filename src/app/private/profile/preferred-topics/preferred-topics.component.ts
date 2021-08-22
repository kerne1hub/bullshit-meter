import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { PrivateProfilePreferredTopicsPageFacade } from './preferred-topics.facade';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';
import { SelectTopicsForm } from '@app/private/shared/forms';

@Component({
  selector: 'private-profile-preferred-topics-page',
  templateUrl: 'preferred-topics.html',
  styleUrls: ['preferred-topics.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateProfilePreferredTopicsPageComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public topicsSelectionForm$: Observable<FormGroupState<SelectTopicsForm>>;

  constructor(
    private facade: PrivateProfilePreferredTopicsPageFacade
  ) {
    this.isLoading$ = this.facade.isLoading$;
    this.topicsSelectionForm$ = this.facade.topicsSelection$;
  }

  public saveCategories(): void {
    this.facade.saveCategories();
  }

  public ngOnInit(): void {
    this.facade.onInit();
  }
}
