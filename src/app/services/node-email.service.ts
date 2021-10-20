import { Injectable } from '@angular/core';
import { Users } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NodeEmailService {

  apiKey = 'apikey=5e918e36111788414066c917';
  userUrl = "https://rencequiz-c032.restdb.io/rest/tbluser";
  constructor(private http: HttpClient) { }

  httpOptions = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json' 
    }) 
  }; 


  sendEmail(url: string, data: any) { 
    return this.http.post(url, data, this.httpOptions); 
  } 

}
