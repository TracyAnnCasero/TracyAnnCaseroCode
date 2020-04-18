import { Component, OnInit } from '@angular/core';
import { Users } from '../model/user';
import { DataService } from '../services/data.service'; 
//import * as Swal from 'sweetalert2/dist/sweetalert2';
import Swal from 'sweetalert2';
// import { Swal } from 'sweetalert2/dist/sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userArray : Users[];
  user = new Users();
  display = 'none';
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getUsers();
    //Swal.fire('Hello world!');
    //Swal("Good job!", "You clicked the button!", "success");
    //Swal.fire("Good job!", "You clicked the button!", "success");
  }

  getUsers(): void {
     this.dataService
         .fetchUsers()
         .subscribe(
           userArray => {
             this.userArray = userArray,
             console.log(userArray)
           }
         ),
         error => (this.userArray = error as any, console.log('error'));
  }

  getUsersById(ursId: string): void { 
     this.dataService
         .fetchUsersById(ursId)
         .subscribe( 
            urs => ( 
            this.user._id = urs[0]._id, 
            this.user.intUserId = urs[0].intUserId, 
            this.user.strName = urs[0].strName
         ), 
         error => (this.userArray = error as any)); 
  } 

  removeUsers(stdId: string): void { 
     this.dataService
         .deleteUsersById(stdId).subscribe( 
            () => { 
            this.getUsers(); 
            Swal.fire("Successfully Deleted!", "You clicked the button!");
         }, 
         error => (this.userArray = error as any) 
    ); 
  } 

  addUsers(): void { 
     this.dataService
         .postUsers(this.user).subscribe( 
            () => { 
            //this.swal("Good job!", "You clicked the button!", "success");
            this.onCloseHandled();
            this.getUsers(); 
            Swal.fire("Successfully Added!", "You clicked the button!");
         }, 
         error => (this.userArray = <any>error) 
      ); 
  } 

  updateUsers(): void {
     this.dataService
         .putUsers(this.user).subscribe( 
            () => { 
            this.onCloseHandled();
            this.getUsers(); 
            Swal.fire("Successfully Updated!", "You clicked the button!");
         }, 
         error => (this.userArray = <any>error) 
      ); 
  }
 
  openModal() { 
    this.display = 'block'; 
  } 

  onCloseHandled() { 
    this.display = 'none'; 
    this.user._id = null;   
    this.user.strName = null; 
    this.user.intUserId = null; 
  } 

}
