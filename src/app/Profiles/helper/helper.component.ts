import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrl: './helper.component.css'
})
export class HelperComponent implements OnInit {


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
