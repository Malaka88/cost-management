import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInForm: FormGroup;

  constructor(
    private logInService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForms();
  }

  initForms() {
    this.logInForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  logIn() {
    this.logInService.logIn();
  }

  register() {
    this.router.navigate(['register']);
  }
}
