import { Component, OnInit } from '@angular/core';
import { ReceptionService } from '../../Services/reception.service';
import { IReception } from '../../Models/IReception';
import { Router } from '@angular/router';
import { IHelper } from '../../Models/IHelper';
import { HelpersService } from '../../Services/helpers.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.css'
})
export class ActiveComponent implements OnInit {

Recp:IReception;
Helper:IHelper;




  constructor(private recpser:ReceptionService,private helpser:HelpersService,private router:Router){
    this.Recp={recpId:0,name:"",dob:"",doj:"",email:"",phone:"",password:"",salary:0,address:"",active:true,logged:true,deptNo:0}
    this.Helper={helpId:0,name:"",dob:"",doj:"",phone:"",email:"",password:"",salary:0,address:"",active:true,logged:true,assigned:true,deptNo:0}
 
  }

  ngOnInit(): void {
    
  }

  btn_Activate():void{

    
    
    this.UpdatRecp();
    this.UpdateHelp();

  }

  UpdatRecp():void{

    

    this.Recp=JSON.parse(window.sessionStorage.getItem("emplogin")!.toString());
    this.Recp.active=true;

    
    this.recpser.UpdateRecp(this.Recp).subscribe(data=>{
      alert("Account Activated");
      this.router.navigate(["login"]);
    },error=>alert(error));
  
  
  }

  UpdateHelp():void{
    debugger;
    
    this.Helper=JSON.parse(window.sessionStorage.getItem("emplogin")!.toString());
    this.Helper.active=true;

    
    this.helpser.UpdateHelper(this.Helper).subscribe(data=>{
      alert("Account Activated");
    },error=>alert(error));
  
  }

}
