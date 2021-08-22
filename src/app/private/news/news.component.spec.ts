import { PrivateNewsPageComponent } from './news.component';
import { PrivateNewsPageEffects, privateNewsPageReducer } from './shared/store';
import { AppState } from '@shared/store/state';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { render, RenderResult } from '@testing-library/angular';
import { configuration } from '@configurations';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { PrivateNewsPageFacade } from './news.facade';

describe('PrivateNewsPageComponent', () => {
  let component: RenderResult<PrivateNewsPageComponent>;
  let componentInstance: PrivateNewsPageComponent;
  let store: Store<AppState>;

  const translation = require(`../../../assets/i18n/${configuration.language.default}.json`);

  beforeEach(async () => {
    component = await render(PrivateNewsPageComponent, {
      imports: [
        TranslateTestingModule.withTranslations(configuration.language.default, translation),
        StoreModule.forRoot({}, {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        }),
        StoreModule.forFeature('privateNewsPage', privateNewsPageReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([PrivateNewsPageEffects])
      ],
      declarations: [
        PrivateNewsPageComponent
      ],
      routes: [],
      providers: [PrivateNewsPageFacade]
    });

    componentInstance = component.fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', async () => {
    expect(component).toBeDefined();
  });
});

