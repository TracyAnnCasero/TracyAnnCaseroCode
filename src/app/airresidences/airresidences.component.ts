import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-airresidences',
  templateUrl: './airresidences.component.html',
  styleUrls: ['./airresidences.component.css']
})
export class AirresidencesComponent implements OnInit {

  lat: number = 43.653908;
  lng: number = -79.384293;

  constructor() { }

  ngOnInit(): void {
  }

  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  //images = ['../../assets/img/premier_big/air_amenities1.jpg','../../assets/img/premier_big/air_amenities2.jpg','../../assets/img/premier_big/air_amenities3.jpg'] 

}
