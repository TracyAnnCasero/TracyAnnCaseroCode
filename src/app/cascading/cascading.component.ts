import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cascading',
  templateUrl: './cascading.component.html',
  styleUrls: ['./cascading.component.css']
})
export class CascadingComponent implements OnInit {

  selectedCountry = 0;    //this was used just to display country when choosing country
  selectedState = 0;

  states = [];
  cities = []

  constructor() { }

  ngOnInit(): void {
  }

  onSelectCountry(country_id: number){
    //this.selectedCountry = country_id;
    this.selectedState = 0;                   //I need this coz I declare [(ngModel)]="selectedState" in States dropdown
    this.cities = [];                         //this will refresh cities dropdown value when choosing country
    this.states = this.getStates().filter((item) => {
      return item.country_id === Number(country_id)
    });
  }

  onSelectState(state_id: number){
    //this.selectedState = state_id;
    this.cities = this.getCities().filter((item) => {
      return item.state_id === Number(state_id)
    })
  }

  getCountries(){
    return [
      { id : 1, name: 'Philippines' },
      { id : 2, name: 'Mexico' },
      { id : 3, name: 'America' }
    ]
  }

  getStates(){
    return [
      { id : 1, country_id: 1, name: 'Metro Manila' },
      { id : 2, country_id: 1, name: 'Central Visayas' },
      { id : 3, country_id: 2, name: 'Campeche' },
      { id : 4, country_id: 2, name: 'Guerrero' },
      { id : 5, country_id: 3, name: 'California' },
      { id : 6, country_id: 3, name: 'Illinois' },
    ]
  }

  getCities(){
    return [
      { id : 1, state_id: 1, name: 'Pasig City' },
      { id : 2, state_id: 1, name: 'Quezon City' },
      { id : 3, state_id: 1, name: 'Cainta City' },
      { id : 3, state_id: 2, name: 'Cebu City' },
      { id : 3, state_id: 2, name: 'Mandaue City' },
      { id : 3, state_id: 2, name: 'Bohol City' },
      { id : 4, state_id: 3, name: 'Ciudad del Carmen' },
      { id : 5, state_id: 3, name: 'Escárcega' },
      { id : 7, state_id: 4, name: 'Acapulco' },
      { id : 10, state_id: 4, name: 'Chilpancingo' },
      { id : 13, state_id: 5, name: 'Los Angeles' },
      { id : 14, state_id: 5, name: 'Sacramento' },
      { id : 15, state_id: 6, name: 'Chicago' },
      { id : 16, state_id: 6, name: 'Springfield' },
    ]
  }

}
