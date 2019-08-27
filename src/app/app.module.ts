import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from 'buttontext';
import { FormsModule } from '@angular/forms';
import { MessageServiceService } from './services/message-service.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ MessageServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
