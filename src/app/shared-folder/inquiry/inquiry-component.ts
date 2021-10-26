import { Component, Input, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NodeEmailService } from 'src/app/services/node-email.service';
import swal from 'sweetalert2';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs/';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry-component.html',
  styleUrls: ['./inquiry-component.css']
})
export class InquiryComponent implements OnInit {

  @Input() properties: string;

  lat: number = 43.653908;
  lng: number = -79.384293;

  form: FormGroup;

  listOfCountries: any[];

  busy: Subscription;

  constructor(private ds: DataService,
              private fb: FormBuilder,
              private nes: NodeEmailService) {
    this.ds.getCountries().subscribe((res) => {
      console.log(res);
      this.listOfCountries = res;
    })
  }

  ngOnInit(): void {
    this.buildForm();
    
    const tag = document.createElement('script'); 
    tag.src = 'https://www.youtube.com/iframe_api'; 
    document.body.appendChild(tag); 
  }

  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  //images = ['../../assets/img/premier_big/air_amenities1.jpg','../../assets/img/premier_big/air_amenities2.jpg','../../assets/img/premier_big/air_amenities3.jpg'] 


  register() {
    if (!this.busy || this.busy.closed) { // prevent double submission
      const form = this.form.getRawValue();
      const payload = {
        name: form.fullName || '',
        email: form.emailAddress || '',
        address: form.address || '',
        country: form.country || '',
        contact: form.mobile || '',
        property: this.properties || ''
      }
      console.log(payload);
  
      // this.busy = this.ds.sampleData().subscribe((res) => { 
      //   console.log(res)
      //   this.busy = null; 
      // })
      this.busy = this.nes.sendEmail("https://tracywebsiteapp.herokuapp.com/sendmail", payload).subscribe((res) => {
        swal.fire(
          'Good job!',
          'Successfully Send to the Agent!',
          'success'
        )
        this.busy = null; 
      }, error => {
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
        this.busy = null; 
      })
    }
  }

  buildForm(): void {
    this.form = this.fb.group({
      fullName: [ null, [Validators.required] ],
      address: [ null, [Validators.required] ],
      emailAddress: [ null, [Validators.required, Validators.email] ],
      mobile: [ null, [Validators.required, Validators.pattern('[0-9]*')] ],
      country: [ null, [Validators.required] ],
    });
  }

  get fullName(): AbstractControl { return this.form.get('fullName');}
  get address(): AbstractControl { return this.form.get('address');}
  get emailAddress(): AbstractControl { return this.form.get('emailAddress');}
  get mobile(): AbstractControl { return this.form.get('mobile');}
  get country(): AbstractControl { return this.form.get('country');}

}
