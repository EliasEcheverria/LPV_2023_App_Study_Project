import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditThemePage } from './edit-theme.page';

const routes: Routes = [
  {
    path: '',
    component: EditThemePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditThemePageRoutingModule {}
