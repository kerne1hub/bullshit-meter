import { ProfileFilledGuard } from '@app/private/shared/guards';
import { PrivateComponent } from './private.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'news',
        canActivate: [ProfileFilledGuard],
        loadChildren: () => import('./news/news.module').then((module) => module.PrivateNewsPageModule)
      },
      {
        path: 'profile',
        canActivate: [ProfileFilledGuard],
        loadChildren: () => import('./profile/profile.module').then((module) => module.PrivateProfilePageModule),
      },
      {
        path: 'onboarding',
        loadChildren: () => import('./onboarding/onboarding.module').then((module) => module.PrivateOnboardingPageModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
