import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { DemoCompComponent } from './demo-comp/demo-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ModalComponent } from './modal/modal.component';
import { DemoHomeComponent } from './demo-home/demo-home.component';
import { DemoLoginComponent } from './demo-login/demo-login.component';
import { DemoSelectComponent } from './demo-select/demo-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import USWDS from "../../node_modules/uswds/src/js/components";
// const { characterCount, accordion } = USWDS; 

const appRoutes: Routes = [
  {path: 'login', component: DemoLoginComponent},
  {path: 'home', component: DemoHomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
]


@NgModule({
  declarations: [
    AppComponent,
    DemoCompComponent,
    ModalComponent,
    DemoHomeComponent,
    DemoLoginComponent,
    DemoSelectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
