import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { NodeEmailService } from '../services/node-email.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-airresidences',
  templateUrl: './airresidences.component.html',
  styleUrls: ['./airresidences.component.css']
})
export class AirresidencesComponent implements OnInit {

  lat: number = 43.653908;
  lng: number = -79.384293;

  form: FormGroup;

  constructor(private nes: NodeEmailService) { }

  ngOnInit(): void {
    const tag = document.createElement('script'); 
    tag.src = 'https://www.youtube.com/iframe_api'; 
    document.body.appendChild(tag); 
  }

  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  //images = ['../../assets/img/premier_big/air_amenities1.jpg','../../assets/img/premier_big/air_amenities2.jpg','../../assets/img/premier_big/air_amenities3.jpg'] 


  register() {
    this.nes.sendEmail("https://tracywebsiteapp.herokuapp.com/sendmail", null).subscribe((res) => {
    }, error => {
    })
  }

}
