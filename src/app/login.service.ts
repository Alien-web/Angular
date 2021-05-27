import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogedIn:boolean=false;
  constructor() { }

  loginUser(){
    this.isLogedIn=true;
    console.log(this.isLogedIn);
  }
}
