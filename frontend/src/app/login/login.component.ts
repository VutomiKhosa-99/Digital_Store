import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myReactiveForm: FormGroup; 
  
  constructor(private fb: FormBuilder) {}

  submit(){
    console.log(this.myReactiveForm)
    
  }

  ngOnInit(): void {
    
    this.myReactiveForm = new FormGroup({
      emailInput: new FormControl(null, Validators.required),
      passwordInput: new FormControl(null,  Validators.required)
    },{updateOn:'change'});

     //this.myReactiveForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(15)]],
    // });

  }

}
