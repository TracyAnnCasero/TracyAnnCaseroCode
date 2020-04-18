import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CascadingComponent } from './cascading/cascading.component'
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { PropertiesComponent } from './properties/properties.component';
import { AirresidencesComponent } from './airresidences/airresidences.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cascading', component: CascadingComponent },
  { path: 'user', component: UserComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'airresidences', component: AirresidencesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
})
export class AppRoutingModule { }
