import { PrivateProfileSettingsPageComponent } from './settings.component';
import { PrivateProfileSettingsPageEffects, privateProfileSettingsPageReducer } from './shared/store';
import { AppState } from '@shared/store/state';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { render, RenderResult } from '@testing-library/angular';
import { configuration } from '@configurations';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { PrivateProfileSettingsPageFacade } from './settings.facade';

describe('PrivateProfileSettingsPageComponent', () => {
  let component: RenderResult<PrivateProfileSettingsPageComponent>;
  let componentInstance: PrivateProfileSettingsPageComponent;
  let store: Store<AppState>;

  const translation = require(`../../../../assets/i18n/${configuration.language.default}.json`);

  beforeEach(async () => {
    component = await render(PrivateProfileSettingsPageComponent, {
      imports: [
        TranslateTestingModule.withTranslations(configuration.language.default, translation),
        StoreModule.forRoot({}, {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        }),
        StoreModule.forFeature('privateProfileSettingsPage', privateProfileSettingsPageReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([PrivateProfileSettingsPageEffects])
      ],
      declarations: [
        PrivateProfileSettingsPageComponent
      ],
      routes: [],
      providers: [PrivateProfileSettingsPageFacade]
    });

    componentInstance = component.fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', async () => {
    expect(component).toBeDefined();
  });
});

