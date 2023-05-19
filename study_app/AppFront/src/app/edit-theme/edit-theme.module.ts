import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditThemePage } from './edit-theme.page';

import { IonicModule } from '@ionic/angular';

import { EditThemePageRoutingModule } from './edit-theme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditThemePageRoutingModule
  ],
  declarations: [EditThemePage]
})
export class EditThemePageModule {}
