import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from '@ronas-it/angular-common';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthenticatedGuard],
    loadChildren: () =>
      import('./private/private.module').then((module) => module.PrivateModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./public/public.module').then((module) => module.PublicModule),
  },
  {
    path: '**',
    redirectTo: '/not-found', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
