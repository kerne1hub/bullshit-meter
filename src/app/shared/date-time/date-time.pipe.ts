import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {
  public transform(value: DateTime, format?: string): string {
    return format ? value.toFormat(format) : value.toLocaleString(DateTime.DATE_MED);
  }
}
