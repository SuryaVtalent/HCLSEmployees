import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Admins/home/home.component';
import { LoginComponent } from './Admins/login/login.component';
import { AboutComponent } from './Admins/about/about.component';
import { ContactComponent } from './Admins/contact/contact.component';
import { EmpLoginComponent } from './Admins/emp-login/emp-login.component';
import { PatientLoginComponent } from './Admins/patient-login/patient-login.component';
import { DepartmentService } from './Services/department.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReceptionistComponent } from './Profiles/receptionist/receptionist.component';
import { HelperComponent } from './Profiles/helper/helper.component';
import { DoctorComponent } from './Profiles/doctor/doctor.component';
import { LabComponent } from './Profiles/lab/lab.component';
import { ReceptionService } from './Services/reception.service';
import { HelpersService } from './Services/helpers.service';
import { DoctorService } from './Services/doctor.service';
import { LabService } from './Services/lab.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    EmpLoginComponent,
    PatientLoginComponent,
    ReceptionistComponent,
    HelperComponent,
    DoctorComponent,
    LabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DepartmentService,
    ReceptionService,
    HelpersService,
    DoctorService,
    LabService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
