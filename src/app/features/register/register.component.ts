import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showLogIn = true;
  showRegister = false;
  registerForm: FormGroup;

  constructor(
    private logInService: LoginService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForms();
  }

  initForms() {
    this.registerForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      password2: [null, Validators.required]
    });
  }

  logIn() {
    this.logInService.logIn();
  }

  register() {
    this.showLogIn = false;
    this.showRegister = true;
  }
}
