import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    
    x:string='Deepak';
   
    object1 = {name:'Deepak', company:'DNATA'};

    object2:Person = {name:{},address:{}};

  constructor() { }

  ngOnInit() {
    this.x = 'This is a Test';
    console.log('LoginComponent NgInit '+ this.x );
  }

}
type HasName={
      firstName?:string,
      lastName?:string
    }
type hasAddress={
  houseNumber?:number,
  place?:string
}
type Person={
  name:HasName,
  address:hasAddress
}
