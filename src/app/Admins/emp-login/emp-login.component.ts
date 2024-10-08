import { Component, OnInit } from '@angular/core';
import { IDepartment } from '../../Models/IDepartment';
import { DepartmentService } from '../../Services/department.service';
import { ReceptionService } from '../../Services/reception.service';
import { Router } from '@angular/router';
import { IReception } from '../../Models/IReception';
import { IHelper } from '../../Models/IHelper';
import { HelpersService } from '../../Services/helpers.service';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrl: './emp-login.component.css'
})
export class EmpLoginComponent implements OnInit {

  DeptList!:IDepartment[];
  Username="";
  Password="";

  recp!:IReception;
  help!:IHelper;

  DepartmentNo:string="";


  
  
  constructor(private deptser:DepartmentService,private recpser:ReceptionService,
             private helpser:HelpersService,
    
             private router:Router){}

  ngOnInit(): void {
    this.deptser.GetAllDepartments().subscribe(data=>{
      this.DeptList=data;
    },error=>alert(error));
    
  }

  btn_Login():void{
   debugger;

    switch(parseInt(this.DepartmentNo!)){
    
      case 10:{
        debugger;
         //Reception login logic
         this.recpser.checkLogin(this.Username,this.Password).subscribe((data:any)=>{
          if(data==null){
            alert("You are not Registerd with us");
            this.router.navigate(["login"]);
          }else{
            window.sessionStorage.setItem("emplogin",JSON.stringify(data));
            window.sessionStorage.setItem("deptno",JSON.stringify(data.deptNo.toString()));

              this.router.navigate(["receptionpro"]).then(()=>{
                window.location.reload();
              });
           }
        })
         break;
      }
      case 20:{
        //Helper login logic
        

       this.helpser.ChecKLogin(this.Username,this.Password).subscribe((data:any)=>{
        if(data==null){
         alert("You are not registerd");
          this.router.navigate(["login"]);
        }else{
          window.sessionStorage.setItem("emplogin",JSON.stringify(data));
            window.sessionStorage.setItem("deptno",JSON.stringify(data.deptNo.toString()));

          this.router.navigate(["helperpro"]).then(()=>{
            window.location.reload();
          });
        }
       })



        break;
     }
     case 30:{
      //Doctor login logic
      break;
   }
   case 40:{
    //Lab login logic
    break;
 }
    }


    // this.recpser.checkLogin(this.Username,this.Password).subscribe((data:any)=>{
    //   if(data==null){
    //     alert("You are not Registerd with us");
    //     this.router.navigate(["login"]);
    //   }else{
    //     window.sessionStorage.setItem("emplogin",JSON.stringify(data));
    //     window.sessionStorage.setItem("deptno",JSON.stringify(data.deptNo.toString()));

    //       this.router.navigate(["receptionpro"]).then(()=>{
    //         window.location.reload();
    //       });
    //    }
    // })


      


  }

  




 

  btn_Cancel():void{
    this.router.navigate(["home"]);
  }


}
