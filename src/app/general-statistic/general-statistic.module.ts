import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralStatisticRoutingModule } from './general-statistic-routing.module';
import { GeneralStatisticComponent } from './general-statistic.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddHeaderInterceptor } from './add-header.interceptor';

import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GeneralStatisticComponent
  ],
  imports: [
    CommonModule,
    GeneralStatisticRoutingModule,
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
export class GeneralStatisticModule { }
