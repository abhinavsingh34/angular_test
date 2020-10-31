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

  constructor(private fb: FormBuilder,   private router: Router, private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
    /**
     ** deleteStudentDetails method
     */
    deleteStudentDetails(studentId: number) {
      this.userService.deleteStudentData(studentId)
              .subscribe(response => {
                console.log(response);
                      return true;
                  },
                  error => {
                      return Observable.throw(error);
                  }
              )
  }
}
