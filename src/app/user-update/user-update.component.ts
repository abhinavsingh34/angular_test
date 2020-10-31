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
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  updateForm: FormGroup;
  public params;
  constructor(private fb: FormBuilder,   private router: Router, private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.params = this.activatedRoute.snapshot.params['id'];
  }

  onUpdateStudentDetail() {
			this.userService.updateStudentdData(this.updateForm.value, this.params)
				.subscribe(response => {
          console.log(response);
				},
				error => {
					console.error("Error deleting food!");
					return Observable.throw(error);
				}
				);
	}
}
