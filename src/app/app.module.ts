import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { WebpackTranslateLoader } from './app.translate.loader';
import { AppState } from '@shared/store';
import { errorHandlerFactory } from '@shared/sentry';
import { ApiModule } from '@shared/api';
import { AuthModule } from '@shared/auth';
import { ProfileModule } from '@shared/profile';
import { AuthEffects } from '@shared/auth/store';
import { ArticleModule } from '@shared/article';
import { CommentModule } from '@shared/comment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: WebpackTranslateLoader
      }
    }),
    ApiModule,
    AuthModule,
    ProfileModule,
    ArticleModule,
    CommentModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot<AppState>({
      router: routerReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 30,
      logOnly: false
    }),
    SocialLoginModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useFactory: errorHandlerFactory
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('180520379672-5puegccpja39gh40lnb6amopeoe4jl6b.apps.googleusercontent.com')
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('561602290896109')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
