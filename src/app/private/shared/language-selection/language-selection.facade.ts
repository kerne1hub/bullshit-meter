import { Injectable } from '@angular/core';
import { LanguageService } from '@shared/language';
import { SelectOption } from '@shared/select/models';
import * as locale from 'locale-codes';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LanguageSelectionFacade {
  constructor(private languageService: LanguageService) {}

  public get languageOptions(): Observable<Array<SelectOption>> {
    return this.languageService?.search({ all: true }).pipe(
      map((response) => response.data),
      map((languages) => languages.map((language) => new SelectOption({
        id: language.id,
        title: locale.where('tag', language.code)?.name || language.code.toUpperCase()
      })))
    );
  }
}
