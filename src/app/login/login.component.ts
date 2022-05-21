import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error:string='';
  constructor(public fbservice:FirebaseService , private _Router:Router, private spinner: NgxSpinnerService) { }

  loginForm = new FormGroup({
 
    email:new FormControl(null , [Validators.email ,Validators.required]),
    password:new FormControl(null, [ Validators.required] )

  })

  submitLoginForm(loginForm:FormGroup)
  {
    this.fbservice.SignIn(loginForm.value.email, loginForm.value.password).then((response)=>{
      this._Router.navigate(['/home']); 
    });
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
