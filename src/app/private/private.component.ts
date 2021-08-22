import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-private-root',
  templateUrl: 'private.html',
  styleUrls: ['private.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateComponent {

}
