import { NgModule } from '@angular/core';
import {
  NbCardModule,
} from '@nebular/theme';

import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';

import { ThemeModule } from '../../@theme/theme.module';

import { ChartModule } from 'angular2-chartjs';

import { ChartjsPieComponent } from './charts/chartjs-pie.component';
import { ChartjsRadarComponent } from './charts/chartjs-radar.component';
import { ChartjsBarHorizontalComponent } from './charts/chartjs-bar-horizontal.component';

@NgModule({
  declarations: [
    SkillsComponent,
    ChartjsPieComponent,
    ChartjsRadarComponent,
    ChartjsBarHorizontalComponent,
  ],
  imports: [
    ThemeModule,
    NbCardModule,
    CommonModule,
    ChartModule,
  ],
})
export class SkillsModule { }
