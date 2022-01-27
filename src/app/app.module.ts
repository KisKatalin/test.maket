import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FirstBlockComponent } from './components/first-block/first-block.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { FourthComponent } from './components/fourth/fourth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstBlockComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    RoundProgressModule,
    CarouselModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
