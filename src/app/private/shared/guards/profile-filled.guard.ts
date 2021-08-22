import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProfileService } from '@shared/profile';
import { AppState } from '@shared/store';
import { Observable } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class ProfileFilledGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<AppState>,
    private profileService: ProfileService
  ) { }

  public canActivate(): Observable<boolean> {
    return this.store
      .pipe(
        exhaustMap(() => this.profileService.profile$),
        map(({ name, email }) => {
          const isProfileDataFilled = !!this.profileService.selectedLanguageID
            && this.profileService.preferredTopics?.length > 0
            && !!name
            && !!email;

          if (!isProfileDataFilled) {
            this.router.navigate(['/onboarding']);
          }

          return isProfileDataFilled;
        })
      );
  }
}
