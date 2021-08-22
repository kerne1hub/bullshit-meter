import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { configuration } from '@configurations';
import { ApiModule as CommonApiModule } from '@ronas-it/angular-common';
import { ApiService } from './api.service';

@NgModule({
  imports: [
    CommonModule,
    CommonApiModule.forRoot({
      apiUrl: configuration.api.url,
      fileKeys: ['avatar_file', 'file']
    })
  ],
  providers: [
    ApiService
  ]
})
export class ApiModule { }
