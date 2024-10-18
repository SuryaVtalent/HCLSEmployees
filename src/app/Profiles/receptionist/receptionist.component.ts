import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrl: './receptionist.component.css'
})
export class ReceptionistComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit(): void {

    let sessionlogval=window.sessionStorage.getItem("emplogin");
    if(sessionlogval==null){
      this.router.navigate(["login/employlogin"]).then(()=>{
        window.location.reload();
      })
      }
      
    
    

  }

}
