import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { ProductDataService } from '../product-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  userFormGroup: any;
  constructor(
    private fb: FormBuilder,
    private dataServ: ProductDataService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      name: this.fb.control('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ]),
      email1: this.fb.control('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ]),
      mobile1: this.fb.control('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      password1: this.fb.control('', Validators.required),
      country1: this.fb.control('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      state1: this.fb.control('', [Validators.required]),
      city1: this.fb.control('', [Validators.required]),

      zipcode1: this.fb.control('', [
        Validators.required,
        Validators.maxLength(6),
      ]),
      gender1: this.fb.control('', Validators.required),
    });
  }

  submitForm() {
    if (this.userFormGroup.valid) {
      console.log(this.userFormGroup.value);
      this.dataServ.addUser(this.userFormGroup.value).subscribe((data) => {
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
