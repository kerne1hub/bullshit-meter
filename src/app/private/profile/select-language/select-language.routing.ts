import { PrivateProfileSelectLanguagePageComponent } from './select-language.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PrivateProfileSelectLanguagePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateProfileSelectLanguagePageRoutingModule { }
