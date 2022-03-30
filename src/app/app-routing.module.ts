import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountBookingComponent } from './features/accounts/components/account-booking/account-booking.component';
import { AccountPageComponent } from './features/accounts/containers/account-page/account-page.component';
import { AssetsOverviewPageComponent } from './features/assets/containers/assets-overview-page/assets-overview-page.component';
import { ContractPageComponent } from './features/contract/contract-page/contract-page.component';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { IncomePageComponent } from './features/income/income-page/income-page.component';
import { FixedCostPageComponent } from './features/spending/containers/fixed-cost-page/fixed-cost-page.component';
import { VariableCostPageComponent } from './features/spending/containers/variable-cost-page/variable-cost-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'fixed-cost', component: FixedCostPageComponent },
  { path: 'variable-cost', component: VariableCostPageComponent },
  { path: 'income', component: IncomePageComponent },
  { path: 'assets-overview', component: AssetsOverviewPageComponent },
  { path: 'contract', component: ContractPageComponent },
  { path: 'accounts', component: AccountPageComponent },
  { path: 'accounts/overview/:sc', component: AccountBookingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
