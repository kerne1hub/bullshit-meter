import { PrivateOnboardingCreateProfilePageComponent } from './create-profile.component';
import { PrivateOnboardingCreateProfilePageEffects, privateOnboardingCreateProfilePageReducer } from './shared/store';
import { AppState } from '@shared/store/state';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { render, RenderResult } from '@testing-library/angular';
import { configuration } from '@configurations';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { PrivateOnboardingCreateProfilePageFacade } from './create-profile.facade';

describe('PrivateOnboardingCreateProfilePageComponent', () => {
  let component: RenderResult<PrivateOnboardingCreateProfilePageComponent>;
  let componentInstance: PrivateOnboardingCreateProfilePageComponent;
  let store: Store<AppState>;

  const translation = require(`../../../../assets/i18n/${configuration.language.default}.json`);

  beforeEach(async () => {
    component = await render(PrivateOnboardingCreateProfilePageComponent, {
      imports: [
        TranslateTestingModule.withTranslations(configuration.language.default, translation),
        StoreModule.forRoot({}, {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        }),
        StoreModule.forFeature('privateOnboardingCreateProfilePage', privateOnboardingCreateProfilePageReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([PrivateOnboardingCreateProfilePageEffects])
      ],
      declarations: [
        PrivateOnboardingCreateProfilePageComponent
      ],
      routes: [],
      providers: [PrivateOnboardingCreateProfilePageFacade]
    });

    componentInstance = component.fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', async () => {
    expect(component).toBeDefined();
  });
});

