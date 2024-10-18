import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILabs } from '../Models/ILabs';

@Injectable({
  providedIn: 'root'
})
export class LabService {

Hosturl:string="http://localhost:34689";
LabWebPath:string="/api/Lab/";

  constructor(private httpser:HttpClient) { }


  CheckLogin(email:string,pwd:string):Observable<ILabs>{
   return this.httpser.get<ILabs>(this.Hosturl+this.LabWebPath+"CLogin?Email="+email+"&Password="+pwd);

  }
}
