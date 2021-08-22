import { PrivateOnboardingPreferredTopicsPageComponent } from './preferred-topics.component';
import { PrivateOnboardingPreferredTopicsPageEffects, privateOnboardingPreferredTopicsPageReducer } from './shared/store';
import { AppState } from '@shared/store/state';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { render, RenderResult } from '@testing-library/angular';
import { configuration } from '@configurations';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { PrivateOnboardingPreferredTopicsPageFacade } from './preferred-topics.facade';

describe('PrivateOnboardingPreferredTopicsPageComponent', () => {
  let component: RenderResult<PrivateOnboardingPreferredTopicsPageComponent>;
  let componentInstance: PrivateOnboardingPreferredTopicsPageComponent;
  let store: Store<AppState>;

  const translation = require(`../../../../assets/i18n/${configuration.language.default}.json`);

  beforeEach(async () => {
    component = await render(PrivateOnboardingPreferredTopicsPageComponent, {
      imports: [
        TranslateTestingModule.withTranslations(configuration.language.default, translation),
        StoreModule.forRoot({}, {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        }),
        StoreModule.forFeature('privateOnboardingPreferredTopicsPage', privateOnboardingPreferredTopicsPageReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([PrivateOnboardingPreferredTopicsPageEffects])
      ],
      declarations: [
        PrivateOnboardingPreferredTopicsPageComponent
      ],
      routes: [],
      providers: [PrivateOnboardingPreferredTopicsPageFacade]
    });

    componentInstance = component.fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', async () => {
    expect(component).toBeDefined();
  });
});

