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
import { ChateauComponent } from './chateau/chateau.component';
import { CheerComponent } from './cheer/cheer.component';
import { CheerfulComponent } from './cheerful/cheerful.component';
import { FieldComponent } from './field/field.component';
import { GraceComponent } from './grace/grace.component';
import { GrassComponent } from './grass/grass.component';
import { Green2Component } from './green2/green2.component';
import { GreenComponent } from './green/green.component';
import { HillComponent } from './hill/hill.component';
import { HopeComponent } from './hope/hope.component';
import { JazzComponent } from './jazz/jazz.component';
import { LaneComponent } from './lane/lane.component';
import { LeafComponent } from './leaf/leaf.component';
import { LightComponent } from './light/light.component';
import { Light2Component } from './light2/light2.component';
import { MezzaComponent } from './mezza/mezza.component';
import { Mezza2Component } from './mezza2/mezza2.component';
import { MplaceComponent } from './mplace/mplace.component';
import { ParkComponent } from './park/park.component';
import { PrincetonComponent } from './princeton/princeton.component';
import { SeaComponent } from './sea/sea.component';
import { ProfileComponent } from './profile/profile.component';
import { ShellComponent } from './shell/shell.component';
import { ShineComponent } from './shine/shine.component';
import { ShoreComponent } from './shore/shore.component';
import { SmileComponent } from './smile/smile.component';
import { SouthComponent } from './south/south.component';
import { SpringComponent } from './spring/spring.component';
import { StyleComponent } from './style/style.component';
import { SunComponent } from './sun/sun.component';
import { TreesComponent } from './trees/trees.component';
import { WindComponent } from './wind/wind.component';
import { VineComponent } from './vine/vine.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
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
  { path: 'charm', component: CharmComponent },
  { path: 'chateau', component: ChateauComponent },
  { path: 'cheer', component: CheerComponent },
  { path: 'cheerful', component: CheerfulComponent },
  { path: 'field', component: FieldComponent },
  { path: 'grace', component: GraceComponent },
  { path: 'grass', component: GrassComponent },
  { path: 'green2', component: Green2Component },
  { path: 'green', component: GreenComponent },
  { path: 'hill', component: HillComponent },
  { path: 'hope', component: HopeComponent },
  { path: 'jazz', component: JazzComponent },
  { path: 'lane', component: LaneComponent },
  { path: 'leaf', component: LeafComponent },
  { path: 'light', component: LightComponent },
  { path: 'light2', component: Light2Component },
  { path: 'mezza', component: MezzaComponent },
  { path: 'mezza2', component: Mezza2Component },
  { path: 'mplace', component: MplaceComponent },
  { path: 'park', component: ParkComponent },
  { path: 'princeton', component: PrincetonComponent },
  { path: 'sea', component: SeaComponent },
  { path: 'shell', component: ShellComponent },
  { path: 'shine', component: ShineComponent },
  { path: 'shore', component: ShoreComponent },
  { path: 'smile', component: SmileComponent },
  { path: 'south', component: SouthComponent },
  { path: 'spring', component: SpringComponent },
  { path: 'style', component: StyleComponent },
  { path: 'sun', component: SunComponent },
  { path: 'trees', component: TreesComponent },
  { path: 'vine', component: VineComponent },
  { path: 'wind', component: WindComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
})
export class AppRoutingModule { }
