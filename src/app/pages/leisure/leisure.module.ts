import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeisureComponent } from './leisure.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [
    LeisureComponent,
  ],
  imports: [
  NbCardModule,
  CommonModule,
  ThemeModule,
  NgbModule,
  ],
})
export class LeisureModule { }
