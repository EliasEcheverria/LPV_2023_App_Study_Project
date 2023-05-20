import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { TopicsPage } from './topics.page';
import { TopicsPageRoutingModule } from './topics-routing.module';
import { MessageComponentModule } from '../message/message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    TopicsPageRoutingModule
  ],
  declarations: [TopicsPage]
})
export class TopicsPageModule {}
