import { Component, OnInit } from '@angular/core';
import { KeycloakService } from "./services/keycloak/keycloak.service";
import { RestService } from "./services/rest-services/restService";
import { User } from "./dto/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.user = this.keycloakService.getUser();
  }

  user: User;
  staffs: Array<string> = [];
  staffId: number;
  singleStaff:string;
  studs: Array<string> = [];
  studId: number;
  singleStud:string;

  constructor(
              private keycloakService: KeycloakService,
              private restServices: RestService)
  {
  }

  logout(){
    this.keycloakService.logout();
  }

  getAllStaffs(){
    console.log("get all staff")
    this.staffs = [];
    this.restServices.getAllStaff()
    .subscribe(res=>{
      this.staffs = res;
    })
  }

  getStaffById(){
    this.singleStaff ='';
    this.restServices.getStaffById(this.staffId)
    .subscribe(res=>{
      this.singleStaff = res;
    })
  }

  getAllStuds(){
    console.log("get all stud")
    this.studs = [];
    this.restServices.getAllStudent()
    .subscribe(res=>{
      this.studs = res;
    })
  }

  getStudById(){
    this.singleStud ='';
    this.restServices.getStudentById(this.studId)
    .subscribe(res=>{
      this.singleStud = res;
    })
  }

}
