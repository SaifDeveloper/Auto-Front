import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { NavComponent } from './nav/nav.component';
import { MaterialnavComponent } from './materialnav/materialnav.component';
import 'hammerjs';
import { NewappComponent } from './newapp/newapp.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { MatgridComponent } from './matgrid/matgrid.component';

const appRoutes: Routes = [
  { path: 'test', component: TestComponent},
  {path: 'nav', component: NavComponent},
  {path: 'form', component: FormComponent},
  {path: 'grid', component: MatgridComponent},
  {path: 'login', component: LoginComponent},
  {path:'',component: LandingComponent}];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TestComponent,
    NavComponent,
    MaterialnavComponent,
    NewappComponent,
    LoginComponent,
    FooterComponent,
    FormComponent,
    MatgridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
