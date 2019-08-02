import { NgModule } from '@angular/core';
import {
  NbCardModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    NbCardModule,
  ],
})
export class HomeModule { }
