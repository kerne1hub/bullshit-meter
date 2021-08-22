import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SelectOption } from '@shared/select/models';
import { FormControlState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { LanguageSelectionFacade } from './language-selection.facade';

@Component({
  selector: 'language-selection',
  templateUrl: 'language-selection.html',
  styleUrls: ['language-selection.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateLanguageSelectionComponent {
  @Input() formControlState: FormControlState<number | null>;

  public options$: Observable<Array<SelectOption>>;

  constructor(private facade: LanguageSelectionFacade) {
    this.options$ = this.facade.languageOptions;
  }
}
