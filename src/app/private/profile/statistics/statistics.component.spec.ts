import { PrivateProfileStatisticsPageComponent } from './statistics.component';
import { PrivateProfileStatisticsPageEffects, privateProfileStatisticsPageReducer } from './shared/store';
import { AppState } from '@shared/store/state';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { render, RenderResult } from '@testing-library/angular';
import { configuration } from '@configurations';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { PrivateProfileStatisticsPageFacade } from './statistics.facade';

describe('PrivateProfileStatisticsPageComponent', () => {
  let component: RenderResult<PrivateProfileStatisticsPageComponent>;
  let componentInstance: PrivateProfileStatisticsPageComponent;
  let store: Store<AppState>;

  const translation = require(`../../../../assets/i18n/${configuration.language.default}.json`);

  beforeEach(async () => {
    component = await render(PrivateProfileStatisticsPageComponent, {
      imports: [
        TranslateTestingModule.withTranslations(configuration.language.default, translation),
        StoreModule.forRoot({}, {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        }),
        StoreModule.forFeature('privateProfileStatisticsPage', privateProfileStatisticsPageReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([PrivateProfileStatisticsPageEffects])
      ],
      declarations: [
        PrivateProfileStatisticsPageComponent
      ],
      routes: [],
      providers: [PrivateProfileStatisticsPageFacade]
    });

    componentInstance = component.fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', async () => {
    expect(component).toBeDefined();
  });
});

