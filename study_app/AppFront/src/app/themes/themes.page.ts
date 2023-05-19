import { Component, OnInit, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';
import axios from 'axios';

@Component({
  selector: 'app-themes',
  templateUrl: 'themes.page.html',
  styleUrls: ['themes.page.scss'],
})
export class ThemesPage implements OnInit{
  private data = inject(DataService);

  temas: any = [];

  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  ngOnInit(): void {
    //this.getUsers();
  }

  ionViewWillEnter(): void {
    this.getThemes();
  }

  getThemes(){
    axios.get("http://localhost:3000/themes/list").then(result => {
      if (result.data.success == true){
        this.temas = result.data.temas;
      }else{
        console.log(result.data.error);
      }
    }).catch(error => {
      console.log(error.message);
    })
  }
}
