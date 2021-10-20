import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CascadingComponent } from './cascading/cascading.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { PropertiesComponent } from './properties/properties.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AirresidencesComponent } from './airresidences/airresidences.component';
import { CoastresidencesComponent } from './coastresidences/coastresidences.component';
import { FameresidencesComponent } from './fameresidences/fameresidences.component';
import { GlamresidencesComponent } from './glamresidences/glamresidences.component';
import { GoldofficeresidencesComponent } from './goldofficeresidences/goldofficeresidences.component';
import { GoldresidencesComponent } from './goldresidences/goldresidences.component';
import { LushresidencesComponent } from './lushresidences/lushresidences.component';
import { RedresidencesComponent } from './redresidences/redresidences.component';
import { SresidencesComponent } from './sresidences/sresidences.component';
import { SailresidencesComponent } from './sailresidences/sailresidences.component';
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
import { GreenComponent } from './green/green.component';
import { Green2Component } from './green2/green2.component';
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
import { ShellComponent } from './shell/shell.component';
import { ShineComponent } from './shine/shine.component';
import { ShoreComponent } from './shore/shore.component';
import { SmileComponent } from './smile/smile.component';
import { SouthComponent } from './south/south.component';
import { SpringComponent } from './spring/spring.component';
import { StyleComponent } from './style/style.component';
import { SunComponent } from './sun/sun.component';
import { TreesComponent } from './trees/trees.component';
import { VineComponent } from './vine/vine.component';
import { WindComponent } from './wind/wind.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
//import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CascadingComponent,
    UserComponent,
    RegisterComponent,
    PropertiesComponent,
    AirresidencesComponent,
    CoastresidencesComponent,
    FameresidencesComponent,
    GlamresidencesComponent,
    GoldofficeresidencesComponent,
    GoldresidencesComponent,
    LushresidencesComponent,
    RedresidencesComponent,
    SresidencesComponent,
    SailresidencesComponent,
    BerkeleyComponent,
    BloomComponent,
    BlueComponent,
    BreezeComponent,
    CharmComponent,
    ChateauComponent,
    CheerComponent,
    CheerfulComponent,
    FieldComponent,
    GraceComponent,
    GrassComponent,
    GreenComponent,
    Green2Component,
    HillComponent,
    HopeComponent,
    JazzComponent,
    LaneComponent,
    LeafComponent,
    LightComponent,
    Light2Component,
    MezzaComponent,
    Mezza2Component,
    MplaceComponent,
    ParkComponent,
    PrincetonComponent,
    SeaComponent,
    ShellComponent,
    ShineComponent,
    ShoreComponent,
    SmileComponent,
    SouthComponent,
    SpringComponent,
    StyleComponent,
    SunComponent,
    TreesComponent,
    VineComponent,
    WindComponent
  ],
  imports: [
    //HttpClient,
    FormsModule,//added for ngModel
    ReactiveFormsModule,//added for form group
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBVKclYlJczlVhmPxWrgEPZUVHi0ukhjpI'
    }),
    NgbModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
