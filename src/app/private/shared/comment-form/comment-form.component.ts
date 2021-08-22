import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControlState } from 'ngrx-forms/src/state';

@Component({
  selector: 'private-comment-form',
  templateUrl: 'comment-form.html',
  styleUrls: ['comment-form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateCommentFormComponent {
  @Input() formControlStateContent: FormControlState<string>;
}
