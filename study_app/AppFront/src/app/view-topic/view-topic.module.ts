import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewTopicPage } from './view-topic.page';

import { IonicModule } from '@ionic/angular';

import { ViewTopicPageRoutingModule } from './view-topic-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTopicPageRoutingModule
  ],
  declarations: [ViewTopicPage]
})
export class ViewTopicPageModule {}
