import { PrivateHeaderModule } from '@app/private/shared/private-header';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private.routing';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ProfileFilledGuard } from './shared/guards';

@NgModule({
  declarations: [PrivateComponent],
  imports: [
    CommonModule,
    RouterModule,
    PrivateHeaderModule,
    PrivateRoutingModule,
    TranslateModule
  ],
  providers: [ProfileFilledGuard]
})
export class PrivateModule { }
