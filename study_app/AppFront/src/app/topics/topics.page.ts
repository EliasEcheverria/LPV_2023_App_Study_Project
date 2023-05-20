import { Component, OnInit, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';
import axios from 'axios';

@Component({
  selector: 'app-topics',
  templateUrl: 'topics.page.html',
  styleUrls: ['topics.page.scss'],
})
export class TopicsPage implements OnInit{
  private data = inject(DataService);

  topics: any = [];

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
  }

  ionViewWillEnter(): void {
    this.getTopics();
  }

  getTopics(){
    axios.get("http://localhost:3000/topics/list").then(result => {
      if (result.data.success == true){
        this.topics = result.data.topics;
      }else{
        console.log(result.data.error);
      }
    }).catch(error => {
      console.log(error.message);
    })
  }
}
