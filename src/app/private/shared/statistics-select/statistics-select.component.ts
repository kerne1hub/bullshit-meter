import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'statistics-select',
  templateUrl: 'statistics-select.html',
  styleUrls: ['statistics-select.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateStatisticsSelectComponent {
  public value: string;

  options: Array<string>;

  constructor() {
    this.value = 'This week';
    this.options = ['This week', 'This month'];
  }

  onClick(option: string): void {
    if (option !== this.value) {
      this.value = option;
    }
  }
}
