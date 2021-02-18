import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDataService } from '../product-data.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  userFormGroup: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private dataServ: ProductDataService,
    private route: Router
  ) {}

  ngOnInit(): void {
    let currentId = this.activateRoute.snapshot.params.id;
    this.dataServ.getUserById(currentId).subscribe((data: any) => {
      let currentUser = data;
      console.log(currentUser);
      this.userFormGroup = this.fb.group({
        name: this.fb.control(currentUser.name, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ]),
        email1: this.fb.control(currentUser.email1, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ]),
        mobile1: this.fb.control(currentUser.mobile1, [
          Validators.required,
          Validators.maxLength(10),
        ]),
        password1: this.fb.control(currentUser.password1, Validators.required),
        country1: this.fb.control(currentUser.country1, [
          Validators.required,
          Validators.minLength(1),
        ]),
        state1: this.fb.control(currentUser.state1, [Validators.required]),
        city1: this.fb.control(currentUser.city1, [Validators.required]),

        zipcode1: this.fb.control(currentUser.zipcode1, [
          Validators.required,
          Validators.maxLength(6),
        ]),
        gender1: this.fb.control(currentUser.gender1, Validators.required),
      });
    });
  }

  submitForm() {
    if (this.userFormGroup.valid) {
      console.log(this.userFormGroup.value);
      this.dataServ
        .updateUser(
          this.activateRoute.snapshot.params.id,
          this.userFormGroup.value
        )
        .subscribe((data) => {
          this.userFormGroup.reset();
          this.route.navigate(['users']);
        });
    } else this.validateAllFormFields(this.userFormGroup);
  }

  validateAllFormFields(formGroup: FormGroup) {
    //{1}
    Object.keys(formGroup.controls).forEach((field) => {
      //{2}
      const control = formGroup.get(field); //{3}
      if (control instanceof FormControl) {
        //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        //{5}
        this.validateAllFormFields(control); //{6}
      }
    });
  }
}
