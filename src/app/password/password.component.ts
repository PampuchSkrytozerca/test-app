import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  user: User;
  pass: string;

  password = new FormControl('', [
    Validators.required,
  ]);

  ngOnInit(): void {
    this.loginService.getCredentials().subscribe(user => {
      this.user = user;
      this.pass = user.password;
    });
  }

  login(): void {
    if (this.password.value === this.pass) {
      this.router.navigate(['movies']);
      localStorage.setItem('password', this.pass);
    } else {
      alert('Invalid password');
    }
  }
}
