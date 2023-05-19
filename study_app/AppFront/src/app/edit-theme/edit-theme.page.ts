import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, Platform, ToastController } from '@ionic/angular';
import { DataService, Message } from '../services/data.service';
import axios from 'axios';

@Component({
  selector: 'app-edit-theme',
  templateUrl: './edit-theme.page.html',
  styleUrls: ['./edit-theme.page.scss'],
})
export class EditThemePage implements OnInit {
  public message!: Message;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  tema : any = {};

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {}

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
        if(result.data.usuario != null){
          this.tema = result.data.tema;
        }else{
          this.tema = {};
        }
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

  saveTheme(){
    var data = {
      id : this.tema.id,
      create_date : this.tema.create_date,
      name : this.tema.name,
      description : this.tema.description,
      keywords : this.tema.keywords,
      owner_user_id : this.tema.owner_user_id
    };
    axios.post("http://localhost:3000/themes/update", data).then(async (result) => {
      if (result.data.success == true){
        this.presentToast("Tema Guardado!!!");
        this.router.navigate(["/themes"]);
      }else{
        this.presentToast(result.data.error);
      }
    }).catch(async error => {
      this.presentToast(error.message);
    })
  }

  async presentToast(message : string){
    const toast = await this.toastController.create({
      message : message,
      duration : 1500,
      position : 'bottom'
    });
    await toast.present();
  }
}
