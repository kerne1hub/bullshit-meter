import { NgForOf } from '@angular/common';
import { Directive, Host, Input } from '@angular/core';

@Directive({
  selector: '[ngForTrackByProperty]',
})
export class NgForTrackByPropertyDirective<T> {
  @Input() public ngForTrackByProperty: keyof T;

  constructor(@Host() private ngFor: NgForOf<T>) {
    this.ngFor.ngForTrackBy = (_: number, item: T) => {
      if (this.ngForTrackByProperty) {
        return item[this.ngForTrackByProperty];
      }

      return item;
    };
  }
}
