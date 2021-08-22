import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseFormControlDirective } from '@app/shared/base-form-control';
import { SelectOption } from './models';

@Component({
  selector: 'app-select',
  templateUrl: 'select.html',
  styleUrls: ['select.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent extends BaseFormControlDirective {
  @Input() options: Array<SelectOption> | null;

  public get selectedOption(): SelectOption | undefined {
    return this.options?.find(((option) => option.id === this.value));
  }

  public onClick(option: SelectOption): void {
    this.value = option.id;
  }
}
