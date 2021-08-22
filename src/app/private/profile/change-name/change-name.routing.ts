import { PrivateProfileChangeNamePageComponent } from './change-name.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PrivateProfileChangeNamePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateProfileChangeNamePageRoutingModule { }
