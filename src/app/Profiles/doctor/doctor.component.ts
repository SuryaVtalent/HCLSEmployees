import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent implements OnInit {

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
