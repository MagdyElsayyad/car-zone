import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLogin:boolean =false;

  error:string='';
  constructor(private _AuthService:AuthService , private _Router:Router , private spinner: NgxSpinnerService) {
    
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
    this._AuthService.register(registerForm.value).subscribe((response)=>{
      if(response.message == "success"){
        this._Router.navigate(['/login']); 
      }
      else{
        this.error=response.errors.email.message;
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
