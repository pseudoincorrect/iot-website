import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbIconModule, NbButtonModule, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    ContactsComponent,
  ],
  imports: [
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbCardModule,
    CommonModule,
    ThemeModule,
    NbToastrModule.forRoot(),
  ],
})
export class ContactsModule { }
