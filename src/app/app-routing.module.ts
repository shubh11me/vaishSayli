import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { NgiffComponent } from './ngiff/ngiff.component';
import { HomeComponent } from './home/home.component';
import { NgforrComponent } from './ngforr/ngforr.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"bin",component:BindingComponent},
  {path:"ngif",component:NgiffComponent},
  {path:"ngfor",component:NgforrComponent},
  {path:"form",component:FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
