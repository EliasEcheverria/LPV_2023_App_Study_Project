import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewThemePage } from './view-theme.page';

import { IonicModule } from '@ionic/angular';

import { ViewThemePageRoutingModule } from './view-theme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewThemePageRoutingModule
  ],
  declarations: [ViewThemePage]
})
export class ViewThemePageModule {}
