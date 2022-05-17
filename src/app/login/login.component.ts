import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error:string='';
  constructor(private _AuthService:AuthService , private _Router:Router, private spinner: NgxSpinnerService) { }

  loginForm = new FormGroup({
 
    email:new FormControl(null , [Validators.email ,Validators.required]),
    password:new FormControl(null, [ Validators.required] )

  })

  submitLoginForm(loginForm:FormGroup)
  {
    this._AuthService.login(loginForm.value).subscribe((response)=>{
      if(response.message == "success"){
        
        localStorage.setItem('userToken',response.token)
        this._AuthService.saveCurrentUser();
        this._Router.navigate(['/home']); 
      }
      else{
        this.error=response.message;
      }
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
