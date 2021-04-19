import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'ngx-chartjs-radar',
  template: `
    <chart type="radar" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsRadarComponent implements OnDestroy {
  options: any;
  data: {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: [
            'JavaScript & TS',
            'C',
            'Python',
            'Verilog',
            'HTML/CSS',
            'Dart',
            'Matlab',
            'ASM',
            'Bash',
          ],
        datasets: [{
          data: [85, 95, 90, 75, 75, 90, 70, 70, 71],
          label: 'Skills',
          borderColor: colors.danger,
          backgroundColor: NbColorHelper.hexToRgbA(colors.dangerLight, 0.5),
        }],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scaleFontColor: 'white',
        legend: {
          display: false,
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        scale: {
          ticks: {
            display: false,
            fontColor: colors.fgText,
            backdropColor: colors.bg,
            stepSize: 20,
            min: 0,
          },
          pointLabels: {
            fontSize: 14,
            fontColor: chartjs.textColor,
          },
          gridLines: {
            color: chartjs.axisLineColor,
          },
          angleLines: {
            color: chartjs.axisLineColor,
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
