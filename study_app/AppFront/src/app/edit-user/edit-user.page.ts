import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, Platform, ToastController } from '@ionic/angular';
import { DataService, Message } from '../services/data.service';
import axios from 'axios';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {
  public message!: Message;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  usuario : any = {};

  constructor(
    private toastController: ToastController,
    private router: Router) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //this.message = this.data.getMessageById(parseInt(id, 10));
    axios.get("http://localhost:3000/user/" + id).then(result => {
      if (result.data.success == true){
        if(result.data.usuario != null){
          this.usuario = result.data.usuario;
        }else{
          this.usuario = {};
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

  saveUser(){
    var data = {
      id : this.usuario.id,
      name : this.usuario.name,
      last_name : this.usuario.last_name,
      email : this.usuario.email
    };
    axios.post("http://localhost:3000/users/update", data).then(async (result) => {
      if (result.data.success == true){
        this.presentToast("Usuario Guardado!!!");
        this.router.navigate(["/home"]);
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
