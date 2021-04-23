import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoCompComponent } from './demo-comp/demo-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ModalComponent } from './modal/modal.component';
// import USWDS from "../../node_modules/uswds/src/js/components";
// const { characterCount, accordion } = USWDS; 

@NgModule({
  declarations: [
    AppComponent,
    DemoCompComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
