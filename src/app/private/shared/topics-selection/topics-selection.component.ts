import { Observable } from 'rxjs';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TagOption } from '@shared/form-tag/models';
import { TopicsSelectionFacade } from './topics-selection.facade';
import { Boxed, FormControlState } from 'ngrx-forms';

@Component({
  selector: 'topics-selection',
  templateUrl: 'topics-selection.html',
  styleUrls: ['topics-selection.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateTopicsSelectionComponent {
  @Input() formControlState: FormControlState<Boxed<Array<number>>>;

  public options$: Observable<Array<TagOption>>;

  constructor(private facade: TopicsSelectionFacade) {
    this.options$ = this.facade.categoriesOptions$;
  }
}
