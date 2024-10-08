import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Admins/home/home.component';
import { LoginComponent } from './Admins/login/login.component';
import { AboutComponent } from './Admins/about/about.component';
import { ContactComponent } from './Admins/contact/contact.component';
import { EmpLoginComponent } from './Admins/emp-login/emp-login.component';
import { PatientLoginComponent } from './Admins/patient-login/patient-login.component';
import { ReceptionistComponent } from './Profiles/receptionist/receptionist.component';
import { HelperComponent } from './Profiles/helper/helper.component';
import { DoctorComponent } from './Profiles/doctor/doctor.component';
import { LabComponent } from './Profiles/lab/lab.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent,

    children:[
      {path:"emplogin",component:EmpLoginComponent},
  {path:"patilogin",component:PatientLoginComponent}
    ]
  }, 
    
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},

  {path:"receptionpro",component:ReceptionistComponent},
  {path:"helperpro",component:HelperComponent},
  {path:"doctorpro",component:DoctorComponent},
  {path:"labpro",component:LabComponent},
  
  {path:"**",redirectTo:"home",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
