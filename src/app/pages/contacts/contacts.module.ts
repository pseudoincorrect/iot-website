import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    ContactsComponent,
  ],
  imports: [
    NbIconModule,
    NbEvaIconsModule,
    NbCardModule,
    CommonModule,
    ThemeModule,
  ],
})
export class ContactsModule { }
