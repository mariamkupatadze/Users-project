import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent  {

  incorrectUser: boolean = false;


  constructor(private router: Router) {

  } 

  onSubmit(registerForm: any) {
    if (
      registerForm.controls['userName'].value.toLowerCase() === 'admin' && 
      registerForm.controls['password'].value.toLowerCase() === 'admin') {
        this.router.navigate(['./users-list']);
        this.incorrectUser = false;
    } else {
        this.incorrectUser = true;
    }

  }

}
