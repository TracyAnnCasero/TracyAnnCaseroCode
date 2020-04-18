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
//import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CascadingComponent,
    UserComponent,
    RegisterComponent,
    PropertiesComponent,
    AirresidencesComponent
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
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
