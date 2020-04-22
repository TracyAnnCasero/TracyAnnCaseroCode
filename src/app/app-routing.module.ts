import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CascadingComponent } from './cascading/cascading.component'
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { PropertiesComponent } from './properties/properties.component';
import { AirresidencesComponent } from './airresidences/airresidences.component';
import { CoastresidencesComponent } from './coastresidences/coastresidences.component';
import { FameresidencesComponent } from './fameresidences/fameresidences.component';
import { GlamresidencesComponent } from './glamresidences/glamresidences.component';
import { GoldofficeresidencesComponent } from './goldofficeresidences/goldofficeresidences.component';
import { GoldresidencesComponent } from './goldresidences/goldresidences.component';
import { LushresidencesComponent } from './lushresidences/lushresidences.component';
import { RedresidencesComponent } from './redresidences/redresidences.component';
import { SailresidencesComponent } from './sailresidences/sailresidences.component';
import { SresidencesComponent } from './sresidences/sresidences.component';
import { BerkeleyComponent } from './berkeley/berkeley.component';
import { BloomComponent } from './bloom/bloom.component';
import { BlueComponent } from './blue/blue.component';
import { BreezeComponent } from './breeze/breeze.component';
import { CharmComponent } from './charm/charm.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cascading', component: CascadingComponent },
  { path: 'user', component: UserComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'properties', component: PropertiesComponent },

  { path: 'airresidences', component: AirresidencesComponent },
  { path: 'coastresidences', component: CoastresidencesComponent },
  { path: 'fameresidences', component: FameresidencesComponent },
  { path: 'glamresidences', component: GlamresidencesComponent },
  { path: 'goldofficeresidences', component: GoldofficeresidencesComponent },
  { path: 'goldresidences', component: GoldresidencesComponent },
  { path: 'lushresidences', component: LushresidencesComponent },
  { path: 'redresidences', component: RedresidencesComponent },
  { path: 'sailresidences', component: SailresidencesComponent },
  { path: 'sresidences', component: SresidencesComponent },

  { path: 'berkeley', component: BerkeleyComponent },
  { path: 'bloom', component: BloomComponent },
  { path: 'blue', component: BlueComponent },
  { path: 'breeze', component: BreezeComponent },
  { path: 'charm', component: CharmComponent }
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
