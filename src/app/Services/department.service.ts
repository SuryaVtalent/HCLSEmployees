import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartment } from '../Models/IDepartment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  HostUrl:string="http://localhost:34689";
  DeptwebPath:string="/api/Department/";


  constructor(private httpser:HttpClient) { }

  GetAllDepartments():Observable<IDepartment[]>{
 return this.httpser.get<IDepartment[]>(this.HostUrl+this.DeptwebPath+"AllDepartments");
  }
}
