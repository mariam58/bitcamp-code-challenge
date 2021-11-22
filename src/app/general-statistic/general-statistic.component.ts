import { Component, OnInit } from '@angular/core';
import { GeneralStatisticService } from './general-statistic.service';
import { IGeneralData, IGneneralDataArray } from './shared/general-data';
import { EChartsOption } from 'echarts';
import { NgForm } from '@angular/forms';
import * as echarts from 'echarts';


@Component({
  selector: 'app-general-statistic',
  templateUrl: './general-statistic.component.html',
  styleUrls: ['./general-statistic.component.scss']
})
export class GeneralStatisticComponent implements OnInit {

 
  genericCurrentInfo = {
    updated_at: '',
    date: '',
    deaths: 0,
    confirmed: 0,
    recovered: 0,   
    new_confirmed: 0,
    new_recovered: 0,
    new_deaths: 0,
    active: 0,
  };
  genericInfo: IGeneralData[]=[];
  totalDeath:number []=[];
  totalConfirmed:number []=[];
  totalRecovered:number []=[];
  dateList:string []=[];
  // genericInfo: any[]=[];
  currentDate: Date = new Date();
  date: any;
  changedCurrentStatisticIndex: number=0;
  constructor(private generalStatistic: GeneralStatisticService) { }

  ngOnInit(): void {
    this.getGeneralStatistic();
    this.date = this.currentDate.getFullYear() + '-' + (this.currentDate.getMonth()+1) + '-' + this.currentDate.getDate();
    console.log(this.date)
  }

  getGeneralStatistic(){
    this.generalStatistic.getGlobalTimeline().subscribe(res=>{
      
      this.genericCurrentInfo=res.data[0];
      this.genericInfo = [...res.data];
      console.log(this.genericInfo);
      for (let i = 0; i < this.genericInfo.length; i++) {
        
        this.totalDeath.push(this.genericInfo[i].deaths)
        this.totalConfirmed.push(this.genericInfo[i].confirmed)
        this.totalRecovered.push(this.genericInfo[i].recovered)
        this.dateList.push(this.genericInfo[i].date)
        // console.log(this.totalDeath)
      }
      this.dateList.reverse();
      this.totalDeath.reverse();
      this.totalConfirmed.reverse();
      this.totalRecovered.reverse();
    })
  }

  changeCurrentStatistic(event: any){
    let currentDate = event.target.value;
    this.changedCurrentStatisticIndex = this.dateList.findIndex(index=>index === currentDate);
    this.genericCurrentInfo = this.genericInfo[this.changedCurrentStatisticIndex];
    
  }


  chartOption: EChartsOption = {
    // title: {
    //   text: 'Stacked Line'
    // },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['შემთხვევა', 'გარდაცვალება', 'გამოჯანმრთელება']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: this.dateList
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'შემთხვევა',
        type: 'line',
        smooth: true,
        stack: 'Total',
        data: this.totalConfirmed
      },
      {
        name: 'გარდაცვალება',
        type: 'line',
        smooth: true,
        stack: 'Total',
        data: this.totalDeath
      },
      {
        name: 'გამოჯანმრთელება',
        type: 'line',
        smooth: true,
        stack: 'Total',
        data: this.totalRecovered
       
      }
    ]
  };
 
}
