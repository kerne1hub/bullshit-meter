import { PublicComponent } from './public.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthenticatedGuard } from '@ronas-it/angular-common';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'sign-in',
        canActivate: [UnauthenticatedGuard],
        loadChildren: () =>
          import('./sign-in/sign-in.module').then(
            (module) => module.PublicSignInPageModule
          ),
      },
      {
        path: 'not-found',
        loadChildren: () =>
          import('./not-found/not-found.module').then(
            (module) => module.PublicNotFoundPageModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
