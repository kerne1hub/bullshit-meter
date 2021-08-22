import { PrivateOnboardingCreateProfilePageComponent } from './create-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PrivateOnboardingCreateProfilePageComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateOnboardingCreateProfilePageRoutingModule { }
