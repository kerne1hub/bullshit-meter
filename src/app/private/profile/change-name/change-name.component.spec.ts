import { PrivateProfileChangeNamePageComponent } from './change-name.component';
import { PrivateProfileChangeNamePageEffects, privateProfileChangeNamePageReducer } from './shared/store';
import { AppState } from '@shared/store/state';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { render, RenderResult } from '@testing-library/angular';
import { configuration } from '@configurations';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { PrivateProfileChangeNamePageFacade } from './change-name.facade';

describe('PrivateProfileChangeNamePageComponent', () => {
  let component: RenderResult<PrivateProfileChangeNamePageComponent>;
  let componentInstance: PrivateProfileChangeNamePageComponent;
  let store: Store<AppState>;

  const translation = require(`../../../../assets/i18n/${configuration.language.default}.json`);

  beforeEach(async () => {
    component = await render(PrivateProfileChangeNamePageComponent, {
      imports: [
        TranslateTestingModule.withTranslations(configuration.language.default, translation),
        StoreModule.forRoot({}, {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        }),
        StoreModule.forFeature('privateProfileChangeNamePage', privateProfileChangeNamePageReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([PrivateProfileChangeNamePageEffects])
      ],
      declarations: [
        PrivateProfileChangeNamePageComponent
      ],
      routes: [],
      providers: [PrivateProfileChangeNamePageFacade]
    });

    componentInstance = component.fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', async () => {
    expect(component).toBeDefined();
  });
});

