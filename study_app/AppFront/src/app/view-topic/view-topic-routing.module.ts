import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTopicPage } from './view-topic.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTopicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTopicPageRoutingModule {}
