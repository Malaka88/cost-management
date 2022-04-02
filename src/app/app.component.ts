import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LoginService } from './features/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  showAssetSubmenu = false;
  showCalculatorSubmenu = false;
  isLoggedIn = false;

  constructor(private logInService: LoginService) { }

  ngOnInit(): void {
    this.logInService.getStatus().subscribe(result => this.isLoggedIn = result);
  }

  toggleAssetSubmmenu() {
    this.showAssetSubmenu = !this.showAssetSubmenu;
    this.showCalculatorSubmenu = false;
  }

  toggleCalculatorSubmenu() {
    this.showCalculatorSubmenu = !this.showCalculatorSubmenu;
    this.showAssetSubmenu = false;
  }
  
  logOut() {
    this.logInService.logOut();
  }

}
