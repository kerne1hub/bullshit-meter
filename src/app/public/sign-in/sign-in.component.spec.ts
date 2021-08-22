import { PublicSignInPageComponent } from './sign-in.component';
import { render, RenderResult } from '@testing-library/angular';
import { configuration } from '@configurations';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { PublicSignInPageFacade } from './sign-in.facade';

describe('PublicSignInPageComponent', () => {
  let component: RenderResult<PublicSignInPageComponent>;
  let componentInstance: PublicSignInPageComponent;

  const translation = require(`../../../assets/i18n/${configuration.language.default}.json`);

  beforeEach(async () => {
    component = await render(PublicSignInPageComponent, {
      imports: [
        TranslateTestingModule.withTranslations(configuration.language.default, translation),
      ],
      declarations: [
        PublicSignInPageComponent
      ],
      routes: [],
      providers: [PublicSignInPageFacade]
    });

    componentInstance = component.fixture.componentInstance;
  });

  it('should create', async () => {
    expect(component).toBeDefined();
  });
});

