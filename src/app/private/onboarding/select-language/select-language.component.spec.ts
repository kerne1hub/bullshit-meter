import { PrivateOnboardingSelectLanguagePageComponent } from './select-language.component';
import { PrivateOnboardingSelectLanguagePageEffects, privateOnboardingSelectLanguagePageReducer } from './shared/store';
import { AppState } from '@shared/store/state';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { render, RenderResult } from '@testing-library/angular';
import { configuration } from '@configurations';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { PrivateOnboardingSelectLanguagePageFacade } from './select-language.facade';

describe('PrivateOnboardingSelectLanguagePageComponent', () => {
  let component: RenderResult<PrivateOnboardingSelectLanguagePageComponent>;
  let componentInstance: PrivateOnboardingSelectLanguagePageComponent;
  let store: Store<AppState>;

  const translation = require(`../../../../assets/i18n/${configuration.language.default}.json`);

  beforeEach(async () => {
    component = await render(PrivateOnboardingSelectLanguagePageComponent, {
      imports: [
        TranslateTestingModule.withTranslations(configuration.language.default, translation),
        StoreModule.forRoot({}, {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        }),
        StoreModule.forFeature('privateOnboardingSelectLanguagePage', privateOnboardingSelectLanguagePageReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([PrivateOnboardingSelectLanguagePageEffects])
      ],
      declarations: [
        PrivateOnboardingSelectLanguagePageComponent
      ],
      routes: [],
      providers: [PrivateOnboardingSelectLanguagePageFacade]
    });

    componentInstance = component.fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', async () => {
    expect(component).toBeDefined();
  });
});

