import { Component, OnInit } from '@angular/core';
import { Users } from '../model/user';
import { DataService } from '../services/data.service'; 
import Swal from 'sweetalert2';
import { RouterModule, Routes, Router } from "@angular/router"; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userArray : Users[];
  user = new Users();
  constructor(private dataService: DataService, private _router: Router) { }

  ngOnInit(): void {
  }

  addUsers(): void { 
    this.dataService
        .postUsers(this.user).subscribe( 
           () => { 
           this.cleanFields(),
           Swal.fire("Successfully Added!", "You clicked the button!");
           this._router.navigate(["/home"]);
        }, 
        error => (this.userArray = <any>error) 
     ); 
 } 

 cleanFields(): void {
   this.user.strName = null,
   this.user.strPassword = null,
   this.user.strLocation = null
 }

}
