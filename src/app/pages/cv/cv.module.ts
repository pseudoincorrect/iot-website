import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbAccordionModule } from '@nebular/theme';

@NgModule({
  declarations: [
    CvComponent,
  ],
  imports: [
    NbCardModule,
    NbAccordionModule,
    ThemeModule,
    CommonModule,
  ],
})
export class CvModule { }
