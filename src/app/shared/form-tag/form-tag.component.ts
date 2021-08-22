import { Component, Input, forwardRef } from '@angular/core';
import { TagOption } from './models';
import { BaseFormControlDirective } from '@shared/base-form-control';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { xor } from 'lodash';

@Component({
  selector: 'form-tag',
  templateUrl: 'form-tag.html',
  styleUrls: ['form-tag.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTagComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormTagComponent),
      multi: true
    }
  ]
})
export class FormTagComponent extends BaseFormControlDirective {
  @Input() options: Array<TagOption> | null;

  public get isAllSelected(): boolean {
    return this.value.length === this.options?.length;
  }

  public isSelected(id: number): boolean {
    return this.value.includes(id);
  }

  public selectAll(event: Event): void {
    if ((event.target as HTMLInputElement).checked) {
      this.value = this.options?.map(({ id }) => id);
    } else {
      this.value = [];
    }
  }

  public inputChanged(id: number): void {
    this.value = xor(this.value, [id]);
  }
}
