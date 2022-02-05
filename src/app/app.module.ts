import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FixedCostPageComponent } from './features/spending/containers/fixed-cost-page/fixed-cost-page.component';
import { FixedCostComponent } from './features/spending/components/fixed-cost/fixed-cost.component';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { VariableCostPageComponent } from './features/spending/containers/variable-cost-page/variable-cost-page.component';
import { IncomePageComponent } from './features/income/containers/income-page/income-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AssetsOverviewPageComponent } from './features/assets/containers/assets-overview-page/assets-overview-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateIncomeDialogComponent } from './features/income/containers/create-income-dialog/create-income-dialog.component';;
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ContractPageComponent } from './features/contract/container/contract-page/contract-page.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    FixedCostPageComponent,
    FixedCostComponent,
    HomePageComponent,
    VariableCostPageComponent,
    IncomePageComponent,
    AssetsOverviewPageComponent,
    CreateIncomeDialogComponent,
    ContractPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    LayoutModule,
    MatListModule,
    FlexLayoutModule,
    NgxChartsModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
