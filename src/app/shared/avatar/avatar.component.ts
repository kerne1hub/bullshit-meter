import { Component, EventEmitter, Input, Output } from '@angular/core';
import { configuration } from '@configurations';

@Component({
  selector: 'avatar',
  templateUrl: 'avatar.html',
  styleUrls: ['avatar.scss']
})
export class AvatarComponent {
  @Input() url?: string;
  @Input() canChangeAvatar: boolean;
  @Input() hasNotifications: boolean;
  @Input() size: 'extrasmall' | 'small' | 'default' | 'large';

  @Output() uploadAvatar: EventEmitter<File>;

  constructor() {
    this.canChangeAvatar = false;
    this.hasNotifications = false;
    this.size = 'default';
    this.uploadAvatar = new EventEmitter();
    this.url = '/assets/images/no-avatar.png';
  }

  public handleFileUpload(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.item(0);
    if (file && file.size < configuration.api.fileUploadLimits.maxAvatarSize) {
      this.uploadAvatar.emit(file);
    } else {
      alert('The avatar size must be less than 5120 kilobytes.'); //TODO
    }
  }
}
