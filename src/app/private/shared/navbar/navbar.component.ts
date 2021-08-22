import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'private-navbar',
  templateUrl: 'navbar.html',
  styleUrls: ['navbar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateNavbarComponent {
  @Input() title: string;
}
