import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { User } from '../core/user';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLogin:boolean =false;

  error:string='';
  constructor(private fbService:FirebaseService , private _Router:Router , private spinner: NgxSpinnerService) {
    
   }

  registerForm = new FormGroup({
    first_name:new FormControl(null , [Validators.minLength(3), Validators.maxLength(10) , Validators.required]),
    last_name:new FormControl(null , [Validators.minLength(3), Validators.maxLength(10) , Validators.required ]),
    age:new FormControl(null , [Validators.required ,Validators.min(16) , Validators.max(70)]),
    email:new FormControl(null , [Validators.email ,Validators.required]),
    password:new FormControl(null, [ Validators.required] )

    

  })

  submitRegisterForm(registerForm:FormGroup)
  {
    const user:User = {
      age: registerForm.value.age,
      password: registerForm.value.password,
      email: registerForm.value.email,
      name: registerForm.value.first_name + ' ' +  registerForm.value.last_name,
    }
    this.fbService.SignUp(user);

    
  }


  ngOnInit():void
  {
    this.spinner.show();

   setTimeout(() => {
  /** spinner ends after 5 seconds */
   this.spinner.hide();
     }, 1000);

 }

}
