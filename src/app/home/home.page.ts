import { Component } from '@angular/core';
import {NavController, AlertController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string;
  password: string;
  constructor(private router: Router, private navCtrl: NavController) {}
  login() {
    console.log('username: ' + this.username);
    console.log('password: ' + this.password);
    return this.router.navigateByUrl('/vihanhome');
  }

  goRegister() {
    return this.router.navigateByUrl('/register');
  }


  /*
      Alert and add function

  */
  /*public todos = [];
  constructor(public alertController: AlertController){}
  async openTodoAlert()
  {
    let addTodoAlert = await this.alertController.create({
      header: "Add a todo",
      subHeader: "Enter your todo",
      inputs:[
        {
          type:"text",
          name:"addTodoInput"
        }],
      buttons:[
        {
          text:"Cancel"
        },
        {
          text:"add todo",
          handler:(inputData)=>{
            let todoText;
            todoText = inputData.addTodoInput;
            this.todos.push(todoText);
          }
        }
      ]
    });
    await addTodoAlert.present();
  }*/
}
