import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [
    ContactsComponent,
  ],
  imports: [
    NbCardModule,
    CommonModule,
    ThemeModule,
  ],
})
export class ContactsModule { }
