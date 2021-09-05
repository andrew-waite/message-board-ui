import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppComponent } from './app.component';
import { MessageBoardHttpClient } from './services/sources/utils/MessageBoardHttpClient';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    NavigationComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
