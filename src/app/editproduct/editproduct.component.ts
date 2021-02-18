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
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css'],
})
export class EditproductComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private dataServ: ProductDataService,
    private route: Router
  ) {}
  productFormGroup: any;
  ngOnInit(): void {
    let currentId = this.activateRoute.snapshot.params.id;
    this.dataServ.getProductById(currentId).subscribe((data: any) => {
      let currentProduct = data;
      console.log(currentProduct);
      this.productFormGroup = this.fb.group({
        productName: this.fb.control(currentProduct.productName, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ]),
        currency: this.fb.control(currentProduct.currency, [
          Validators.required,
          Validators.maxLength(1),
        ]),
        image: this.fb.control(currentProduct.image, Validators.required),
        price: this.fb.control(currentProduct.price, Validators.required),
        description: this.fb.control(currentProduct.description, [
          Validators.required,
          Validators.maxLength(150),
        ]),
      });
    });
  }

  submitForm() {
    if (this.productFormGroup.valid) {
      console.log(this.productFormGroup.value);
      this.dataServ
        .updateProduct(
          this.activateRoute.snapshot.params.id,
          this.productFormGroup.value
        )
        .subscribe((data: any) => {
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
