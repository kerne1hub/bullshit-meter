import { LanguageModule } from './../language/language.module';
import { CategoryModule } from '@shared/category';
import { NgModule } from '@angular/core';
import { UserModule } from '@ronas-it/angular-common';
import { User } from '@shared/user';
import { ProfileService } from './profile.service';

@NgModule({
  imports: [
    UserModule.forRoot({
      userModel: User,
      userService: ProfileService
    }),
    CategoryModule,
    LanguageModule
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
