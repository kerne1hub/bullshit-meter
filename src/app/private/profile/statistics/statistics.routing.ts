import { PrivateProfileStatisticsPageComponent } from './statistics.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PrivateProfileStatisticsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateProfileStatisticsPageRoutingModule { }
