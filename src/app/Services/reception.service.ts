import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReception } from '../Models/IReception';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {

  HostUrl:string="http://localhost:34689";
  RecpWebPath:string="/api/Reception/";

  constructor(private httpser:HttpClient) { }


  GetReceptionDetails():Observable<IReception[]>{
   return this.httpser.get<IReception[]>(this.HostUrl+this.RecpWebPath+"AllReceptionDetails");
  }

  GetRecpByDeptId():Observable<IReception>{
   return this.httpser.get<IReception>(this.HostUrl+this.RecpWebPath+"GetReceptionByDeptId?DeptNo=10")
  }

  checkLogin(email:string,pwd:string):Observable<IReception>{
  return  this.httpser.get<IReception>(this.HostUrl+this.RecpWebPath+"GetReceptionByEmailandPassword?Email="+email+"&Password="+pwd);
  }
}
