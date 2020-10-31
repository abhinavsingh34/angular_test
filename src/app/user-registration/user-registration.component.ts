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
  signupForm: FormGroup;
  constructor(private fb: FormBuilder,   private router: Router, private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
      /**
    * studentFormData Method which will fetch student form data
    */
   private studentFormData(): void {
    this.signupForm = this.fb.group({
    //firstName: ['', [Validators.required, ValidationService.spaceNotAllow, ValidationService.onlyAlphabetsAllow]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    });
    //	console.log('his.signupForm ', this.signupForm );
    }
    /**
    ** onFormSubmit method is use to submit the user details data and navigate to './detail' page
    */
   public onFormSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    this.userService.postRequestResponse(this.signupForm.value) //Observable need to subscribe to get value
    .subscribe(response => { //Observer  An Observer is a consumer of values delivered by an Observable.
      this.router.navigate(['./detail']);
    },
    error => {
    //console.error("Error deleting food!" + error);
    return Observable.throw(error);
    });
    }
    }
}
