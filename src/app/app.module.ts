import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatCheckboxModule} from '@angular/material/checkbox'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountBookingComponent } from './features/accounts/account-booking/account-booking.component';
import { AccountComponent } from './features/accounts/account/account.component';
import { AssetsOverviewPageComponent } from './features/assets/assets-overview-page/assets-overview-page.component';
import { ContractDialogComponent } from './features/contract/contract-dialog/contract-dialog.component';
import { ContractPageComponent } from './features/contract/contract-page/contract-page.component';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { CreateIncomeDialogComponent } from './features/income/create-income-dialog/create-income-dialog.component';
import { IncomePageComponent } from './features/income/income-page/income-page.component';
import { FixedCostPageComponent } from './features/spending/fixed-cost-page/fixed-cost-page.component';
import { VariableCostPageComponent } from './features/spending/variable-cost-page/variable-cost-page.component';
import { CustomCardComponent } from './shared/custom-card/custom-card.component';
import { SpedingPageComponent } from './features/spending/speding-page/speding-page.component';
import { CreditCardPageComponent } from './features/credit-card/credit-card-page/credit-card-page.component';
import { SavingsPlanPageComponent } from './features/savings-plan/savings-plan-page/savings-plan-page.component';
import { FinancialFreedomPageComponent } from './features/calculator/financial-freedom-page/financial-freedom-page.component';
import { CalendarPageComponent } from './features/calendar/calendar-page/calendar-page.component';
import { TaxRelevantDataPageComponent } from './features/tax-relevant-data/tax-relevant-data-page/tax-relevant-data-page.component';
import { CryptoCurrencyPageComponent } from './features/assets/crypto-currency-page/crypto-currency-page.component';
import { AssetPricePageComponent } from './features/assets/asset-price-page/asset-price-page.component';
import { AboDialogComponent } from './features/contract/abo-dialog/abo-dialog.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { LoginComponent } from './features/login/login.component';
import { MatMenuModule } from '@angular/material/menu';
import { AuthGuardService } from './features/login/auth-guard.service';
import { RegisterComponent } from './features/register/register.component';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { StockPriceDiagramComponent } from './features/assets/stock-price-diagram/stock-price-diagram.component';
import { SavingsRatePageComponent } from './features/calculator/savings-rate-page/savings-rate-page.component';
import { SavingsRateDialogComponent } from './features/calculator/savings-rate-dialog/savings-rate-dialog.component';
import { SpAssetsDialogComponent } from './features/savings-plan/sp-assets-dialog/sp-assets-dialog.component';
import { SpPaymentDialogComponent } from './features/savings-plan/sp-payment-dialog/sp-payment-dialog.component';
import { AccountDialogComponent } from './features/accounts/account-dialog/account-dialog.component';
import { NewAccountDialogComponent } from './features/accounts/new-account-dialog/new-account-dialog.component';
import { TransactionDialogComponent } from './features/accounts/transaction-dialog/transaction-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FixedCostPageComponent,
    HomePageComponent,
    VariableCostPageComponent,
    IncomePageComponent,
    AssetsOverviewPageComponent,
    CreateIncomeDialogComponent,
    ContractPageComponent,
    AccountComponent,
    AccountBookingComponent,
    CustomCardComponent,
    ContractDialogComponent,
    SpedingPageComponent,
    CreditCardPageComponent,
    SavingsPlanPageComponent,
    FinancialFreedomPageComponent,
    CalendarPageComponent,
    TaxRelevantDataPageComponent,
    CryptoCurrencyPageComponent,
    AssetPricePageComponent,
    AboDialogComponent,
    LoginComponent,
    RegisterComponent,
    StockPriceDiagramComponent,
    SavingsRatePageComponent,
    SavingsRateDialogComponent,
    SpAssetsDialogComponent,
    SpPaymentDialogComponent,
    AccountDialogComponent,
    NewAccountDialogComponent,
    TransactionDialogComponent,
  ],
  imports: [
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule,
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
    MatTabsModule,
    NgApexchartsModule,
    MatMenuModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
