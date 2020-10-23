import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  getData: any;
  constructor(private formBuilder: FormBuilder, private router: Router, public http: HttpClient) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as { example: string };
    this.getData = state;
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: [this.getData.example[0].name, Validators.required],
      email: [this.getData.example[0].email, Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      number: ['', Validators.compose([Validators.required, Validators.pattern(/^(0|[0-9]\d*)$/)])]
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    let urlPath = "https://reqres.in/api/users";
    let submitData = {
      name: this.registerForm.value.firstName,
      email: this.registerForm.value.email,
      mobileNumber: this.registerForm.value.number
    }
    this.http.post(urlPath, submitData).subscribe(res => {
      console.log(res)
      if (res) {
        // success
        this.router.navigate(['/final']);
      } else {
        // error

      }

    })

  }

}
