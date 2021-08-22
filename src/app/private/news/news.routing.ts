import { PrivateNewsPageComponent } from './news.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PrivateNewsPageComponent
  },
  {
    path: ':id',
    loadChildren: () => import('./details/details.module').then((module) => module.PrivateNewsDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateNewsPageRoutingModule { }
