import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctor } from '../Models/IDoctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  Hosturl:string="http://localhost:34689/";
  DocWebPath:string="api/Doctor/";

  constructor(private httpser:HttpClient) { }


  Checklogin(ema:string,pwsd:string):Observable<IDoctor>{
   return this.httpser.get<IDoctor>(this.Hosturl+this.DocWebPath+"GetDocByEmailandPassword?Email="+ema+"&Password="+pwsd);

  }

}
