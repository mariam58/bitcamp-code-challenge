import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralStatisticComponent } from './general-statistic.component';

const routes: Routes = [{ path: '', component: GeneralStatisticComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralStatisticRoutingModule { }
