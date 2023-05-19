import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { DataService, Message } from '../services/data.service';
import axios from 'axios';

@Component({
  selector: 'app-view-theme',
  templateUrl: './view-theme.page.html',
  styleUrls: ['./view-theme.page.scss'],
})
export class ViewThemePage implements OnInit {
  public message!: Message;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  tema : any = {};

  constructor() {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //this.message = this.data.getMessageById(parseInt(id, 10));
    /*axios.get("http://localhost:3000/user/" + id).then(result => {
      if (result.data.success == true){
        this.usuario = result.data.usuario;
      }else{
        console.log(result.data.error);
      }
    }).catch(error => {
      console.log(error.message);
    })*/
    axios.get("http://localhost:3000/themes/" + id).then(result => {
      if (result.data.success == true){
        this.tema = result.data.tema;
      }else{
        console.log(result.data.error);
      }
    }).catch(error => {
      console.log(error.message);
    })
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }
}
