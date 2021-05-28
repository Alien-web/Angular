import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm=new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    username:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
 });
 isInvalid:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.firstName;
    this.lastName;
    this.username;
    this.email;
    this.password;

  }
  onSubmit(){
    if(this.signupForm.valid){
      this.router.navigateByUrl('/login');
    }
    else{
      this.isInvalid=true;
    }
  }
  get firstName(){return this.signupForm.get('firstName')}
  get lastName(){return this.signupForm.get('lastName')}
  get username(){return this.signupForm.get('username')}
  get email(){return this.signupForm.get('email')}
  get password(){return this.signupForm.get('password')}
}
