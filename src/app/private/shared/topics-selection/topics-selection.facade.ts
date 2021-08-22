import { CategoryService } from '@app/shared/category';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TagOption } from '@shared/form-tag/models';

@Injectable()
export class TopicsSelectionFacade {
  constructor(
    private categoryService: CategoryService
  ) { }

  public get categoriesOptions$(): Observable<Array<TagOption>> {
    return this.categoryService?.search({ all: true }).pipe(
      map((response) => response.data),
      map((categories) => categories.map((category) => new TagOption({
        id: category.id,
        text: category.name
      })))
    );
  }
}
