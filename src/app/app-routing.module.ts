import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountBookingComponent } from './features/accounts/account-booking/account-booking.component';
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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'fixed-cost', component: FixedCostPageComponent },
  { path: 'variable-cost', component: VariableCostPageComponent },
  { path: 'spending', component: SpedingPageComponent },
  { path: 'income', component: IncomePageComponent },
  { path: 'contract', component: ContractPageComponent },
  { path: 'accounts', component: AccountComponent },
  { path: 'accounts/overview/:sc', component: AccountBookingComponent },
  { path: 'credit-card', component: CreditCardPageComponent },
  { path: 'calendar', component: CalendarPageComponent },
  { path: 'savings-plan', component: SavingsPlanPageComponent },

  { path: 'savings-rate', component: SavingsRatePageComponent },
  { path: 'financial-freedom', component: FinancialFreedomPageComponent },

  { path: 'tax-relevant', component: TaxRelevantDataPageComponent },

  { path: 'price', component: AssetPricePageComponent },
  { path: 'asset-overview', component: AssetsOverviewPageComponent },
  { path: 'crypto', component: CryptoCurrencyPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
