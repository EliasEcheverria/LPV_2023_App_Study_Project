import { Component, OnInit, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  private data = inject(DataService);

  usuarios: any = [];

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
    this.getUsers();
  }

  getUsers(){
    axios.get("http://localhost:3000/users/list").then(result => {
      if (result.data.success == true){
        this.usuarios = result.data.usuarios;
      }else{
        console.log(result.data.error);
      }
    }).catch(error => {
      console.log(error.message);
    })
  }
}
