import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HomeModule } from './home/home.module';
import { SkillsModule } from './skills/skills.module';
import { ProjectsModule } from './projects/projects.module';
import { CvModule } from './cv/cv.module';
import { ContactsModule } from './contacts/contacts.module';
import { LeisureModule } from './leisure/leisure.module';

@NgModule({
  imports: [
    HomeModule,
    SkillsModule,
    ProjectsModule,
    LeisureModule,
    CvModule,
    ContactsModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
