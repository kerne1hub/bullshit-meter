import { PrivateProfilePageComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'settings'
  },
  {
    path: '',
    component: PrivateProfilePageComponent,
    children: [
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then((module) => module.PrivateProfileSettingsPageModule)
      },
      {
        path: 'statistics',
        loadChildren: () => import('./statistics/statistics.module').then((module) => module.PrivateProfileStatisticsPageModule)
      }
    ]
  },
  {
    path: 'settings/change-name',
    loadChildren: () => import('./change-name/change-name.module').then((module) => module.PrivateProfileChangeNamePageModule)
  },
  {
    path: 'settings/select-language',
    loadChildren: () => import('./select-language/select-language.module').then((module) => module.PrivateProfileSelectLanguagePageModule)
  },
  {
    path: 'settings/preferred-topics',
    loadChildren: () => import('./preferred-topics/preferred-topics.module').then((module) => module.PrivateProfilePreferredTopicsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateProfilePageRoutingModule { }
