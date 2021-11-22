import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryStatisticComponent } from './country-statistic.component';

const routes: Routes = [{ path: '', component: CountryStatisticComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryStatisticRoutingModule { }
