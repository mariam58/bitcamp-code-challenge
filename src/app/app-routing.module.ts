import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./general-statistic/general-statistic.module').then(m => m.GeneralStatisticModule) }, { path: 'country-statistic', loadChildren: () => import('./country-statistic/country-statistic.module').then(m => m.CountryStatisticModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
