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
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  productFormGroup: any;
  constructor(
    private fb: FormBuilder,
    private dataServ: ProductDataService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      productName: this.fb.control('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ]),
      currency: this.fb.control('', [
        Validators.required,
        Validators.maxLength(1),
      ]),
      image: this.fb.control('', Validators.required),
      price: this.fb.control('', Validators.required),
      description: this.fb.control('', [
        Validators.required,
        Validators.maxLength(150),
      ]),
    });
  }

  submitForm() {
    if (this.productFormGroup.valid) {
      console.log(this.productFormGroup.value);
      this.dataServ
        .addProduct(this.productFormGroup.value)
        .subscribe((data) => {
          this.productFormGroup.reset();
          this.route.navigate(['productlist']);
        });
    } else this.validateAllFormFields(this.productFormGroup);
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
