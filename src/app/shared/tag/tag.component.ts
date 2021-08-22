import { Component, Input, Output, EventEmitter } from '@angular/core';
import stringToColor from 'string-to-color';

@Component({
  selector: 'tag',
  templateUrl: 'tag.html',
  styleUrls: ['tag.scss'],
})
export class TagComponent {
  @Input() id: number;
  @Input() text: string;
  @Input() isInput: boolean;
  @Input() isSelected: boolean;

  @Output() inputChanged: EventEmitter<number>;

  public get color(): string | null {
    if (this.isSelected) {
      return stringToColor(this.id);
    } else {
      return null;
    }
  }

  constructor() {
    this.isSelected = true;
    this.inputChanged = new EventEmitter();
  }

  public handleChange(): void {
    this.inputChanged.emit(this.id);
  }
}
