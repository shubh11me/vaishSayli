import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { NgiffComponent } from './ngiff/ngiff.component';
import { HomeComponent } from './home/home.component';
import { NgforrComponent } from './ngforr/ngforr.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BindingComponent,
    NgiffComponent,
    HomeComponent,
    NgforrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
