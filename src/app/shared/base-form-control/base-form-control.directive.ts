import { Directive, Input } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { FormControlState, FormControlValueTypes } from 'ngrx-forms/src/state';

@Directive()
export class BaseFormControlDirective<ValueType = any> implements ControlValueAccessor {
  @Input() required: boolean;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() ngrxFormControlState: FormControlState<FormControlValueTypes>;
  @Input() disabled: boolean;

  @Input()
  public get value(): ValueType {
    return this._value;
  }

  public set value(value: ValueType) {
    this.handleChanges(value);
    this._value = value;
  }

  protected _value: ValueType;

  public onChange: any = () => { };

  public onTouched: any = () => { };

  public registerOnChange(fn: () => any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => any): void {
    this.onTouched = fn;
  }

  public writeValue(value: any): void {
    this._value = value;
  }

  public validate(formControl: FormControl): Record<string, unknown> | null {
    if (this.required && !formControl.value) {
      return {
        required: {
          given: formControl.value,
        },
      };
    }

    return null;
  }

  protected handleChanges(value: any): void {
    this.onChange(value);
    this.onTouched();
  }
}
