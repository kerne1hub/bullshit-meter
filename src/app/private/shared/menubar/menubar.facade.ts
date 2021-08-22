import { Injectable } from '@angular/core';
import { Category } from '@shared/category/models';
import { ProfileService } from '@shared/profile';
import { User } from '@shared/user';
import { Observable } from 'rxjs';

@Injectable()
export class MenubarFacade {
  public get profile$(): Observable<User> {
    return this.profileService.profile$;
  }

  public get loginService(): string {
    return this.profileService.loginService;
  }

  public get selectedCategories$(): Observable<Array<Category>> {
    return this.profileService.selectedCategories$;
  }

  constructor(private profileService: ProfileService) {}
}
