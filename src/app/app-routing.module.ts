import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountBookingComponent } from './features/accounts/account-booking/account-booking.component';
import { CreditcardBookingComponent } from './features/credit-card/creditcard-booking/creditcard-booking.component';
import { AccountComponent } from './features/accounts/account/account.component';
import { AssetsOverviewPageComponent } from './features/assets/assets-overview-page/assets-overview-page.component';
import { FinancialFreedomPageComponent } from './features/calculator/financial-freedom-page/financial-freedom-page.component';
import { SavingsPlanPageComponent } from './features/savings-plan/savings-plan-page/savings-plan-page.component';
import { CalendarPageComponent } from './features/calendar/calendar-page/calendar-page.component';
import { ContractPageComponent } from './features/contract/contract-page/contract-page.component';
import { CreditCardPageComponent } from './features/credit-card/credit-card-page/credit-card-page.component';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { IncomePageComponent } from './features/income/income-page/income-page.component';
import { FixedCostPageComponent } from './features/spending/fixed-cost-page/fixed-cost-page.component';
import { SpedingPageComponent } from './features/spending/speding-page/speding-page.component';
import { VariableCostPageComponent } from './features/spending/variable-cost-page/variable-cost-page.component';
import { TaxRelevantDataPageComponent } from './features/tax-relevant-data/tax-relevant-data-page/tax-relevant-data-page.component';
import { SavingsRatePageComponent } from './features/calculator/savings-rate-page/savings-rate-page.component';
import { AssetPricePageComponent } from './features/assets/asset-price-page/asset-price-page.component';
import { CryptoCurrencyPageComponent } from './features/assets/crypto-currency-page/crypto-currency-page.component';
import { LoginComponent } from './features/login/login.component';
import { AuthGuardService } from './features/login/auth-guard.service';
import { RegisterComponent } from './features/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuardService] },
  { path: 'fixed-cost', component: FixedCostPageComponent, canActivate: [AuthGuardService] },
  { path: 'variable-cost', component: VariableCostPageComponent, canActivate: [AuthGuardService] },
  { path: 'spending', component: SpedingPageComponent, canActivate: [AuthGuardService] },
  { path: 'income', component: IncomePageComponent, canActivate: [AuthGuardService] },
  { path: 'contract', component: ContractPageComponent, canActivate: [AuthGuardService] },
  { path: 'accounts', component: AccountComponent, canActivate: [AuthGuardService] },
  { path: 'accounts/overview/:sc', component: AccountBookingComponent, canActivate: [AuthGuardService] },
  { path: 'credit-card/overview/:sc', component: CreditcardBookingComponent, canActivate: [AuthGuardService] },
  { path: 'credit-card', component: CreditCardPageComponent, canActivate: [AuthGuardService] },
  { path: 'calendar', component: CalendarPageComponent, canActivate: [AuthGuardService] },
  { path: 'savings-plan', component: SavingsPlanPageComponent, canActivate: [AuthGuardService] },
  { path: 'savings-rate', component: SavingsRatePageComponent, canActivate: [AuthGuardService] },
  { path: 'financial-freedom', component: FinancialFreedomPageComponent, canActivate: [AuthGuardService] },
  { path: 'tax-relevant', component: TaxRelevantDataPageComponent, canActivate: [AuthGuardService] },
  { path: 'price', component: AssetPricePageComponent, canActivate: [AuthGuardService] },
  { path: 'asset-overview', component: AssetsOverviewPageComponent, canActivate: [AuthGuardService] },
  { path: 'crypto', component: CryptoCurrencyPageComponent, canActivate: [AuthGuardService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
