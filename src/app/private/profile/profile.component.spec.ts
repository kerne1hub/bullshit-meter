import { PrivateProfilePageComponent } from './profile.component';
import { PrivateProfilePageEffects, privateProfilePageReducer } from './shared/store';
import { AppState } from '@shared/store/state';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { render, RenderResult } from '@testing-library/angular';
import { configuration } from '@configurations';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { PrivateProfilePageFacade } from './profile.facade';

describe('PrivateProfilePageComponent', () => {
  let component: RenderResult<PrivateProfilePageComponent>;
  let componentInstance: PrivateProfilePageComponent;
  let store: Store<AppState>;

  const translation = require(`../../../assets/i18n/${configuration.language.default}.json`);

  beforeEach(async () => {
    component = await render(PrivateProfilePageComponent, {
      imports: [
        TranslateTestingModule.withTranslations(configuration.language.default, translation),
        StoreModule.forRoot({}, {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        }),
        StoreModule.forFeature('privateProfilePage', privateProfilePageReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([PrivateProfilePageEffects])
      ],
      declarations: [
        PrivateProfilePageComponent
      ],
      routes: [],
      providers: [PrivateProfilePageFacade]
    });

    componentInstance = component.fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', async () => {
    expect(component).toBeDefined();
  });
});

