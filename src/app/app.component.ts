import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { configuration } from '@configurations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(
    private translateService: TranslateService,
  ) { }

  public ngOnInit(): void {
    this.translateService.addLangs(configuration.language.available);
    this.translateService.setDefaultLang(configuration.language.default);

    this.setLanguage(configuration.language.default);
  }

  private setLanguage(language: string): void {
    const isLanguageAvailable = configuration.language.available.includes(language);
    if (isLanguageAvailable) {
      this.translateService.use(language);
    } else {
      this.translateService.use(configuration.language.default);
    }
  }
}
