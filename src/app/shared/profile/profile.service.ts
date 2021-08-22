import { CategoryService, Category } from '@shared/category';
import { LanguageService, Language } from '@shared/language';
import { OAuthService } from '@shared/auth/enums/o-auth-service';
import { isEqual, pickBy } from 'lodash';
import { UpdateProfileRequest } from './models';
import { Observable, of } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { ApiService, UserService } from '@ronas-it/angular-common';
import { User } from '@shared/user';
import { classToPlain, plainToClass } from 'class-transformer';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class ProfileService extends UserService<User> {
  private _selectedCategories: Array<Category>;
  private _selectedLanguage?: Language;

  public get profile$(): Observable<User> {
    return super.profile$.pipe(
      switchMap((profile) => profile ? of(profile) : this.loadProfile())
    );
  }

  public get loginService(): string {
    return localStorage.service;
  }

  public get selectedLanguageID(): number | null {
    return localStorage.languageID ? +localStorage.languageID : null;
  }

  public get selectedCategories$(): Observable<Array<Category>> {
    const isSameArray = isEqual(
      this._selectedCategories.map(({ id }) => id).sort(), this.preferredTopics.sort()
    );

    return this._selectedCategories.length > 0 && isSameArray
      ? of(this._selectedCategories)
      : this.categoryService.search({ all: true }).pipe(
        map((response) => response.data),
        map((categories) => {
          const filteredCategories = categories.filter(({ id }) => this.preferredTopics.includes(id));
          this._selectedCategories = filteredCategories;

          return filteredCategories;
        })
      );
  }

  public get selectedLanguage$(): Observable<Language | undefined> {
    const isSameLanguage = this._selectedLanguage?.id === this.selectedLanguageID;

    return this._selectedLanguage && isSameLanguage
      ? of(this._selectedLanguage)
      : this.languageService.search({ all: true }).pipe(
        map((response) => response.data),
        map((languages) => {
          const filteredLanguage = languages.find(({ id }) => id === this.selectedLanguageID);
          if (filteredLanguage !== undefined) {
            this._selectedLanguage = filteredLanguage;
          }

          return filteredLanguage;
        })
      );
  }

  public get preferredTopics(): Array<number> {
    return localStorage.categories ? JSON.parse(localStorage.categories) : [];
  }

  constructor(
    protected injector: Injector,
    protected apiService: ApiService,
    private categoryService: CategoryService,
    private languageService: LanguageService
  ) {
    super(injector);
    this._selectedCategories = [];
  }

  public saveLoginService(service: OAuthService): void {
    localStorage.setItem('service', service);
  }

  public saveUserID(id: number | undefined): void {
    if (+localStorage.userID !== id) {
      this.resetProfileSettings();
    }
    localStorage.setItem('userID', JSON.stringify(id));
  }

  public saveSelectedLanguage(languageID: number | null): void {
    localStorage.setItem('languageID', JSON.stringify(languageID));
  }

  public saveCategories(categories: Array<number>): void {
    localStorage.setItem('categories', JSON.stringify(categories));
  }

  public updateUserProfile(user: UpdateProfileRequest): Observable<User> {
    const { avatarFile, ...restParams } = user;

    return this.apiService.post<User>('/profile', pickBy({
      ...classToPlain(new UpdateProfileRequest(restParams)),
      avatar_file: avatarFile
    })).pipe(
      map((response) => plainToClass(User, response)),
      tap((response) => this.setProfile(response))
    );
  }

  public loadProfile(): Observable<User> {
    return this.apiService.get<User>('/profile').pipe(
      map((response) => plainToClass(User, response)),
      tap((profile) => this.setProfile(profile))
    );
  }

  public resetProfileSettings(): void {
    localStorage.removeItem('service');
    localStorage.removeItem('languageID');
    localStorage.removeItem('categories');
  }
}
