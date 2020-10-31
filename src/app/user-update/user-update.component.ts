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
  public userListData; 
  constructor(private fb: FormBuilder,   private router: Router, private userService: UserService,
    private activatedRoute: ActivatedRoute) { 
      this.updateForm = this.fb.group({
        firstName: ['', [Validators.required]]
        });
    }

  ngOnInit(): void {
    this.params = this.activatedRoute.snapshot.params['id'];
    this.getSingleStudentList(this.params);
  }

	getSingleStudentList(para) {
		this.userService.getSingleStudentDetail(para)
			.subscribe(
			data => {      
        if (data){
          this.userListData = data['firstName'];
        }
      }
			);
	}
  onUpdateStudentDetail() {
    console.log(this.updateForm.value);
			this.userService.updateStudentdData(this.updateForm.value, this.params)
				.subscribe(response => {
          console.log(response);
          this.router.navigate(['./detail']);
				},
				error => {
					console.error("Error deleting food!");
					return Observable.throw(error);
				}
				);
	}
}
