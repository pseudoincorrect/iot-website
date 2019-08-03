import { NgModule } from '@angular/core';
import {
  NbCardModule, NbAlertModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    NbAlertModule,
    CommonModule,
    ThemeModule,
    NbCardModule,
  ],
})
export class HomeModule { }
