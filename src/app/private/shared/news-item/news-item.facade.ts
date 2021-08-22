import { Injectable } from '@angular/core';
import { ProfileService } from '@shared/profile';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class NewsItemFacade {
  constructor(private profileService: ProfileService) {}

  public getTagName$(categoryID: number): Observable<string | undefined> {
    return this.profileService.selectedCategories$.pipe(
      map((categories) => categories.find(({ id }) => id === categoryID)?.name)
    );
  }
}
