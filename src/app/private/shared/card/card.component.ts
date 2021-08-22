import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'private-card',
  templateUrl: 'card.html',
  styleUrls: ['card.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateCardComponent {
  @Input() cardTitle: string;
  @Input() primaryButtonText: string;
  @Input() secondaryButtonText?: string;
  @Input() isDisabled: boolean | undefined;
  @Input() previousUrl: string;
  @Input() nextUrl: string;

  @Output() primaryButtonClick: EventEmitter<string>;

  constructor() {
    this.primaryButtonClick = new EventEmitter();
  }

  handleClick(): void {
    this.primaryButtonClick.emit(this.nextUrl);
  }
}
