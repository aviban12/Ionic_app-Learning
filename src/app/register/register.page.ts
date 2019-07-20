import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
  constructor(private router: Router) { }
  signup() {

  }
  gobacklogin() {
    return this.router.navigateByUrl('/home');
  }
  ngOnInit() {
  }

}
