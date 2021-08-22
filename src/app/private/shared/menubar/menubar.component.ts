import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Category } from '@shared/category/models';
import { User } from '@shared/user';
import { Observable } from 'rxjs';
import { MenubarFacade } from './menubar.facade';

@Component({
  selector: 'private-menubar',
  templateUrl: 'menubar.html',
  styleUrls: ['menubar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivateMenubarComponent {
  public profile$: Observable<User>;
  public loginService: string;
  public selectedCategories$: Observable<Array<Category>>;

  public links = [
    { text: 'NONE', filter: { } },
    { text: 'NEW', filter: { onlyNew: true } },
    { text: 'TRUTH', filter: { onlyTrusted: true } },
    { text: 'FAKE', filter: { onlyFakes: true } }
  ];

  constructor(private facade: MenubarFacade) {
    this.profile$ = this.facade.profile$;
    this.loginService = this.facade.loginService;
    this.selectedCategories$ = this.facade.selectedCategories$;
  }
}
