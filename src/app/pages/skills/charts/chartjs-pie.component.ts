import {
  Component,
  OnDestroy,
} from '@angular/core';
import {
  NbThemeService,
} from '@nebular/theme';
// import { ChartModule } from 'angular2-chartjs';
import 'chartjs-plugin-labels';

@Component({
  selector: 'ngx-chartjs-pie',
  template: `
    <chart type="pie" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsPieComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['Software', 'Embedded\n\rSystems', 'Hardware', 'Design'],
        datasets: [{
          data: [100, 130, 100, 80],
          backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warning],
        }],
      };

      this.options = {
        plugins: {
          labels: {
            render: 'label',
            fontSize: 15,
            fontColor: '#fff',
            fontStyle: 'bold',
          },
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [{
            display: false,
          } ],
          yAxes: [{
            display: false,
          } ],
        },
        legend: {
          display: false,
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
