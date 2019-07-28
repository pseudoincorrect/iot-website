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
            'JavaScript / Typescript ',
            'Python',
            'C',
            'C++',
            'ASM',
            'Matlab',
            'Verilog',
            'VHDL',
            'Bash',
            'PowerShell',
            'HTML, CSS',
          ],
        datasets: [{
          data: [90, 90, 90, 75, 65, 65, 90, 70, 70, 70, 80],
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
