import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrl: './lab.component.css'
})
export class LabComponent implements OnInit {


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
