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
  flagRecSec:boolean=false;
  flagHelperSec:boolean=false;

  

  
  constructor(private router:Router){}

  ngOnInit(): void {
    
    let sessionval=window.sessionStorage.getItem("emplogin");
    if(sessionval==null){
      this.flagAnonymous=true;
      this.flagSecure=false;
    }else{
      this.flagAnonymous=false;
      this.flagSecure=true;


      let sessionlogval=window.sessionStorage.getItem("deptno");
      if(sessionlogval=="10"){
       this.flagRecSec=true;
       this.flagHelperSec=false;
      }else if(sessionlogval=="20"){
        this.flagRecSec=false;
        this.flagHelperSec=true;
      }

        
      

      

      
     
      


    }

    
    
  }


  btn_Logout():void{
    window.sessionStorage.removeItem("emplogin");
    window.sessionStorage.removeItem("deptno");
    window.sessionStorage.clear();
    this.router.navigate(["login"]).then(()=>{
    window.location.reload();
    });
    
  }




  



}
