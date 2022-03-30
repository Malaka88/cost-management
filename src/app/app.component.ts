import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  showAssetSubmenu = false;
  showCalculatorSubmenu = false;

  toggleAssetSubmmenu() {
    this.showAssetSubmenu = !this.showAssetSubmenu;
    this.showCalculatorSubmenu = false;
  }

  toggleCalculatorSubmenu() {
    this.showCalculatorSubmenu = !this.showCalculatorSubmenu;
    this.showAssetSubmenu = false;
  }
}
