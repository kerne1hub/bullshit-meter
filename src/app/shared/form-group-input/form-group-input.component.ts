import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseFormControlDirective } from '@shared/base-form-control';

@Component({
  selector: 'form-input',
  templateUrl: 'form-group-input.html',
  styleUrls: ['form-group-input.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormGroupInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormGroupInputComponent),
      multi: true
    }
  ]
})
export class FormGroupInputComponent extends BaseFormControlDirective {
  @Input() isFirst: boolean;
  @Input() isLast: boolean;
  @Input() isDefault: boolean;
  @Input() hasIcon: boolean;

  constructor() {
    super();
    this.hasIcon = true;
  }
}
