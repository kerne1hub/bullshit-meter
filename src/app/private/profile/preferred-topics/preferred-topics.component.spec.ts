import { PrivateProfilePreferredTopicsPageComponent } from './preferred-topics.component';
import { PrivateProfilePreferredTopicsPageEffects, privateProfilePreferredTopicsPageReducer } from './shared/store';
import { AppState } from '@shared/store/state';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { render, RenderResult } from '@testing-library/angular';
import { configuration } from '@configurations';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { PrivateProfilePreferredTopicsPageFacade } from './preferred-topics.facade';

describe('PrivateProfilePreferredTopicsPageComponent', () => {
  let component: RenderResult<PrivateProfilePreferredTopicsPageComponent>;
  let componentInstance: PrivateProfilePreferredTopicsPageComponent;
  let store: Store<AppState>;

  const translation = require(`../../../../assets/i18n/${configuration.language.default}.json`);

  beforeEach(async () => {
    component = await render(PrivateProfilePreferredTopicsPageComponent, {
      imports: [
        TranslateTestingModule.withTranslations(configuration.language.default, translation),
        StoreModule.forRoot({}, {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        }),
        StoreModule.forFeature('privateProfilePreferredTopicsPage', privateProfilePreferredTopicsPageReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([PrivateProfilePreferredTopicsPageEffects])
      ],
      declarations: [
        PrivateProfilePreferredTopicsPageComponent
      ],
      routes: [],
      providers: [PrivateProfilePreferredTopicsPageFacade]
    });

    componentInstance = component.fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', async () => {
    expect(component).toBeDefined();
  });
});

