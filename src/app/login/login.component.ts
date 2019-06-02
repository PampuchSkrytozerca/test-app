import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  user: User;
  username: string;

  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit(): void {
    this.loginService.getCredentials().subscribe(user => {
      this.user = user;
      this.username = user.username;
    });
  }

  login(): void {
    if (this.email.value === this.username) {
      this.router.navigate(['password']);
    } else {
      alert('Invalid username');
    }
  }
}
