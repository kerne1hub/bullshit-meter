import { PublicNotFoundPageComponent } from './not-found.component';
import { render, RenderResult } from '@testing-library/angular';
import { configuration } from '@configurations';
import { TranslateTestingModule } from 'ngx-translate-testing';

describe('PublicNotFoundPageComponent', () => {
  let component: RenderResult<PublicNotFoundPageComponent>;
  let componentInstance: PublicNotFoundPageComponent;

  const translation = require(`../../../assets/i18n/${configuration.language.default}.json`);

  beforeEach(async () => {
    component = await render(PublicNotFoundPageComponent, {
      imports: [
        TranslateTestingModule.withTranslations(configuration.language.default, translation),
      ],
      declarations: [
        PublicNotFoundPageComponent
      ],
      routes: [],
      providers: []
    });

    componentInstance = component.fixture.componentInstance;
  });

  it('should create', async () => {
    expect(component).toBeDefined();
  });
});

