import { ProfileService } from '@shared/profile';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { AppState } from '@shared/store';
import { AuthActions } from '@shared/auth';
import { User } from '@shared/user';

@Injectable()
export class PrivateHeaderFacade {
  public get isProfilePage$(): Observable<boolean> {
    return this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event) => (event as NavigationEnd).urlAfterRedirects),
        startWith(this.router.url),
        map((url) => url.startsWith('/profile'))
      );
  }

  public get isMainPage$(): Observable<boolean> {
    return this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event) => (event as NavigationEnd).urlAfterRedirects),
        startWith(this.router.url),
        map((url) => url.startsWith('/news'))
      );
  }

  public get profile$(): Observable<User> {
    return this.profileService.profile$;
  }

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private profileService: ProfileService
  ) {
  }

  public logout(): void {
    return this.store.dispatch(AuthActions.unauthorize());
  }
}
