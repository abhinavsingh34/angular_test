import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  FormArray,
  FormControl
  } from '@angular/forms';
  import {
  Router,
  NavigationEnd,
  ActivatedRoute
  } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  signupForms: FormGroup;
  constructor(private fb: FormBuilder,   private router: Router, private userService: UserService,
    private activatedRoute: ActivatedRoute) {
      this.signupForms = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        });
     }

  ngOnInit(): void {
  }

    /**
    ** onFormSubmit method is use to submit the user details data and navigate to './detail' page
    */
   public onFormSubmit() {
    if (this.signupForms.valid) {
      console.log(this.signupForms.value);
    this.userService.postRequestResponse(this.signupForms.value)
    .subscribe(response => { 
      this.router.navigate(['./detail']);
    },
    error => {
    //console.error("Error deleting food!" + error);
    return Observable.throw(error);
    });
    }
    }
}
