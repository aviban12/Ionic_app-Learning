import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: string;
  email: string;
  address: string;
  contact: string;
  password: string;
  constructor() { }
  signup() {

  }
  gobacklogin() {

  }
  ngOnInit() {
  }

}
