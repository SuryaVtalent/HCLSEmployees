import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHelper } from '../Models/IHelper';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  HostUrl:string="http://localhost:34689";
  HelperWebPath:string="/api/Helper/";

  constructor(private httpser:HttpClient) { }


  GetHelperByDeptId():Observable<IHelper>{
   return this.httpser.get<IHelper>(this.HostUrl+this.HelperWebPath+"GetHelperByDeptNo?DeptNo=20")
  }

  ChecKLogin(email:string,pwd:string):Observable<IHelper>{
    debugger;
    return this.httpser.get<IHelper>(this.HostUrl+this.HelperWebPath+"CheckLogin?Email="+email+"&Password="+pwd);
  }
}
