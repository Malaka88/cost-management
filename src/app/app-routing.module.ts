import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsOverviewPageComponent } from './features/assets/containers/assets-overview-page/assets-overview-page.component';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { IncomePageComponent } from './features/income/containers/income-page/income-page.component';
import { FixedCostPageComponent } from './features/spending/containers/fixed-cost-page/fixed-cost-page.component';
import { VariableCostPageComponent } from './features/spending/containers/variable-cost-page/variable-cost-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'fixed-cost', component: FixedCostPageComponent },
  { path: 'variable-cost', component: VariableCostPageComponent },
  { path: 'income', component: IncomePageComponent },
  { path: 'assets-overview', component: AssetsOverviewPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
