import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    localStorage.removeItem("user");
    localStorage.removeItem("basic_ip_address");
    localStorage.removeItem("premium_ip_address");
  }

  navigate(user){
    if(user == undefined){
     this.router.navigate(["/login"])  
    }else{
    localStorage.setItem("user",user)
    this.router.navigate(["/page2"])
    }
  }
}
