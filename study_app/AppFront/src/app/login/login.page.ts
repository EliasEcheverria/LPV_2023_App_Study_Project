import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, Platform, ToastController } from '@ionic/angular';
import axios from 'axios';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public message!: Message;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  usuario : any = {};

  constructor(private toastController: ToastController,
   private router: Router) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //this.message = this.data.getMessageById(parseInt(id, 10));
    axios.get("http://localhost:3000/users/" + id)
    .then( result => {
      if (result.data.success == true) {

        if( result.data.usuario != null){
          this.usuario = result.data.usuario;
        }else{
          this.usuario = {};
        }

      } else {
        console.log(result.data.error);
      }
      
    }).catch(error => {
      console.log(error.message);
    })
  }

  ionViewWillEnter(): void {

    //verificar si el usuario esta logueado
    let token = localStorage.getItem('token');

    if (token == null){
      this.router.navigate(["/login"]);
    }
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
    

    
  }

  loginUser(){
    console.log("Login Usuario");
    var data = {
      email: this.usuario.email,
      password: this.usuario.password
    }
    
    //console.log(data);
    
    axios.post("http://localhost:3000/users/login" , data)
    .then(  async result => {
      if (result.data.success == true) {
        //console.log(result.data);
        this.presentToats ("Bienvenido");
        localStorage.setItem("token", result.data.token);
        
        this.router.navigate(["/themes"]);
      } else {
        this.presentToats (result.data.error );
        
      }
      
    }).catch( async error => {
      this.presentToats (error.message.data.error );
    })
  }

  logoutUser(){
    console.log("Logout Usuario");
    var data = {
      token : null
    }
    
    //console.log(data);
    
    axios.post("http://localhost:3000/users/update", data).then(async (result) => {
      if (result.data.success == true){
        this.presentToats ("Cerrando Sesión");
        this.router.navigate(["/login"]);
      }else{
        this.presentToats (result.data.error);
      }
      
    }).catch( async error => {
      this.presentToats (error.message.data.error );
    })
  }

  async presentToats (message : string){
    const toast = await this.toastController.create({
      message:message,
      duration: 1500,
      position: 'top',
      });

    await toast.present();
  }
}
