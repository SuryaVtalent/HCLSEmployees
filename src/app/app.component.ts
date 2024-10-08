import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'HCLSEmployees';


  flagAnonymous:boolean=true;
  flagSecure:boolean=false;

  flagRec:boolean=false;
  flagHelp:boolean=false;

  constructor(private router:Router){}

  ngOnInit(): void {
    debugger;

    let sessionlogval=window.sessionStorage.getItem("emplogin");
    if(sessionlogval==null){
      this.flagAnonymous=true;
      this.flagSecure=false;
    }else{
      this.flagAnonymous=false;
      this.flagSecure=true;

      let sessionval=window.sessionStorage.getItem("deptno");
      if(sessionval=="10"){
      this.flagRec=true;
      this.flagHelp=false;
      }else{
        this.flagRec=false;
        this.flagHelp=true;
      }


    }

    
  }


  btn_LogoutClick():void{
    window.sessionStorage.removeItem("emplogin");
    window.sessionStorage.removeItem("deptno");
    window.sessionStorage.clear();
    this.router.navigate(["login"]).then(()=>{
      window.location.reload();
    });
  }




}
