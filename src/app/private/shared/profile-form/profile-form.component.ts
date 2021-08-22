import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControlState } from 'ngrx-forms';

@Component({
  selector: 'profile-form',
  templateUrl: 'profile-form.html',
  styleUrls: ['profile-form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateProfileFormComponent {
  @Input() formControlStateName: FormControlState<string>;
  @Input() formControlStateEmail: FormControlState<string>;
}
