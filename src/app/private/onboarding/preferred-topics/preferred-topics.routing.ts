import { PrivateOnboardingPreferredTopicsPageComponent } from './preferred-topics.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PrivateOnboardingPreferredTopicsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateOnboardingPreferredTopicsPageRoutingModule { }
