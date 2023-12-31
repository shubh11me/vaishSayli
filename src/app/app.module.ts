import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgiffComponent } from './ngiff/ngiff.component';
import { HomeComponent } from './home/home.component';
import { NgforrComponent } from './ngforr/ngforr.component';
import { FormsComponent } from './forms/forms.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from './card/card.component';
import { TodosComponent } from './todos/todos.component';
import { TodocardComponent } from './todocard/todocard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BindingComponent,
    NgiffComponent,
    HomeComponent,
    NgforrComponent,
    FormsComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    TodosComponent,
    TodocardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
