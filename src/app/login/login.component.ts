import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    
    x:string='Deepak';
   
    object1 = {name:'Deepak', company:'DNATA'};

    object2:Person = {firstName:"Minnal"};

  constructor() { }

  ngOnInit() {
    this.x = 'This is a Test';
    console.log('LoginComponent NgInit '+ this.x );
  }

}
type Person={
      firstName:string,
      lastName?:string
    }
