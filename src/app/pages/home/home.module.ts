import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HomeRoutingModule, routedComponents } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    // HomeRoutingModule
  ],
})
export class HomeModule { }
