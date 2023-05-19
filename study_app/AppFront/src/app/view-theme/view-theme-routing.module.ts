import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewThemePage } from './view-theme.page';

const routes: Routes = [
  {
    path: '',
    component: ViewThemePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewThemePageRoutingModule {}
