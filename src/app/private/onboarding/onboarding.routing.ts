import { PrivateOnboardingPageComponent } from './onboarding.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'select-language'
  },
  {
    path: '',
    component: PrivateOnboardingPageComponent,
    children: [
      {
        path: 'select-language',
        loadChildren: () => import('./select-language/select-language.module').then((module) => module.PrivateOnboardingSelectLanguagePageModule)
      },
      {
        path: 'create-profile',
        loadChildren: () => import('./create-profile/create-profile.module').then((module) => module.PrivateOnboardingCreateProfilePageModule)
      },
      {
        path: 'preferred-topics',
        loadChildren: () => import('./preferred-topics/preferred-topics.module').then((module) => module.PrivateOnboardingPreferredTopicsPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateOnboardingPageRoutingModule { }
