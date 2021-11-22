import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryStatisticRoutingModule } from './country-statistic-routing.module';
import { CountryStatisticComponent } from './country-statistic.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddHeaderInterceptor } from './add-header.interceptor';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    CountryStatisticComponent
  ],
  imports: [
    CommonModule,
    CountryStatisticRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true,
    }
  ],
})
export class CountryStatisticModule { }
