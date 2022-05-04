import { Component, OnInit } from '@angular/core';
import { CountryStatisticService } from './country-statistic.service';
import { ICountryData } from './shared/country-data';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-country-statistic',
  templateUrl: './country-statistic.component.html',
  styleUrls: ['./country-statistic.component.scss'],
})
export class CountryStatisticComponent implements OnInit {
  allCountryStatistic: ICountryData[] = [];
  selectedCountry: ICountryData | any;
  selectedCountryIndex: any;
  selectedCountryCode: string = '';
  specificCountriesStatistic: any;

  totalDeath: number[] = [];
  totalConfirmed: number[] = [];
  totalRecovered: number[] = [];
  dateList: string[] = [];

  lastThreeMonthDeath: number[]=[]
  lastThreeMonthConfirmed: number[]=[]
  lastThreeMonthRecovered: number[]=[]
  lastThreeMonthDateList: string[]=[]
  
  dailyStatistic: number[] = [];

  option: EChartsOption;
  chartOption: EChartsOption;

  constructor(private countryStatisticService: CountryStatisticService) {
    this.option = {};
    this.chartOption = {};
  }

  ngOnInit(): void {
    this.getAllCountryStatistic();
  }

  getAllCountryStatistic() {
    this.countryStatisticService.getAllCountries().subscribe((res) => {
      this.allCountryStatistic = res.data;
    });
  }

  getSpecificCountriesStatistic() {
    this.countryStatisticService
      .getSpecificCountries(this.selectedCountryCode)
      .subscribe((res) => {
        this.specificCountriesStatistic = res.data;
        this.dailyStatistic.push(
          this.specificCountriesStatistic.timeline[0].confirmed
        );
        this.dailyStatistic.push(
          this.specificCountriesStatistic.timeline[0].deaths
        );
        this.dailyStatistic.push(
          this.specificCountriesStatistic.timeline[0].confirmed -
            this.specificCountriesStatistic.timeline[0].deaths
        );

        this.specificCountriesStatistic.timeline.reverse();
        for (
          let i = 0;
          i < this.specificCountriesStatistic.timeline.length;
          i++
        ) {
          this.totalDeath.push(
            this.specificCountriesStatistic.timeline[i].deaths
          );
          this.totalConfirmed.push(
            this.specificCountriesStatistic.timeline[i].confirmed
          );
          this.totalRecovered.push(
            this.specificCountriesStatistic.timeline[i].recovered
          );
          this.dateList.push(this.specificCountriesStatistic.timeline[i].date);
        }
        this.changePeriod('fullPeriod')

        this.barChartFunc();
      });
  }

  clearData() {
    this.dailyStatistic = [];
    this.totalDeath = [];
    this.totalConfirmed = [];
    this.totalRecovered = [];
    this.dateList = [];
  }

  selectCountry(event: any) {
    this.clearData();
    this.selectedCountry = event.target.value;
    this.getSelectCountryStatistic();
  }

  getSelectCountryStatistic() {
    this.selectedCountryIndex = this.allCountryStatistic.findIndex(
      (index) => index.name === this.selectedCountry
    );
    this.selectedCountryCode =
      this.allCountryStatistic[this.selectedCountryIndex].code;

    this.getSpecificCountriesStatistic();
  }

  // change period
  changePeriod(event:any){
    if(event==='lastMonths'){
  
      this.lastThreeMonthConfirmed = this.totalConfirmed.slice(0,90)
      this.lastThreeMonthDeath = this.totalDeath.slice(0,90)
      this.lastThreeMonthRecovered = this.totalRecovered.slice(0,90)
      this.lastThreeMonthDateList = this.dateList.slice(0,90)
      console.log(this.totalConfirmed, this.lastThreeMonthConfirmed)
      this.lineChratFunc(this.lastThreeMonthDateList, this.lastThreeMonthConfirmed, this.lastThreeMonthDeath, this.lastThreeMonthRecovered)
          
    }else{
      this.lineChratFunc(this.dateList, this.totalConfirmed, this.totalDeath, this.totalRecovered)


    }
  }

  lineChratFunc(datePeriod:string[], confirmedNum:number[], deathsNum:number[], recoveredNum:number[]) {
    this.chartOption = {
      // title: {
      //   text: 'Stacked Line'
      // },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['შემთხვევა', 'გარდაცვალება', 'გამოჯანმრთელება'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      // toolbox: {
      //   feature: {
      //     saveAsImage: {}
      //   }
      // },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: datePeriod,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'შემთხვევა',
          type: 'line',
          smooth: true,
          stack: 'Total',
          data: confirmedNum,
        },
        {
          name: 'გარდაცვალება',
          type: 'line',
          smooth: true,
          stack: 'Total',
          data: deathsNum,
        },
        {
          name: 'გამოჯანმრთელება',
          type: 'line',
          smooth: true,
          stack: 'Total',
          data: recoveredNum,
        },
      ],
    };

  }

  //  bar chart

  barChartFunc() {
    this.option = {
      xAxis: {
        type: 'category',
        data: ['შემთხვევა', 'გარდაცვალება', 'გამოჯანმრთელება'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: this.dailyStatistic,
          type: 'bar',
        },
      ],
    };

  }
}
