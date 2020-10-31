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
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public userData: any;
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserData();
  }
  /**
  ** onFormSubmit method is use to submit the user details data and navigate to './detail' page
  */
  public getUserData() {
    this.userService.getResponse()
      .subscribe(response => {
        console.log(response);
        this.userData = response;
        console.log(this.userData);
      },
        error => {
          return Observable.throw(error);
        });
  }
  /**
   ** deleteStudentDetails method
   */
  deleteStudentDetails(id) {
    this.userService.deleteStudentData(id)
      .subscribe(response => {
        console.log('response', response);
        this.getUserData();
        return true;
      },
        error => {
          return Observable.throw(error);
        }
      )
  }
  
}
