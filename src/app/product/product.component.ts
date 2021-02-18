import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../product-data.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productObj: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataservice: ProductDataService
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.id);
    this.dataservice
      .getProductById(this.activatedRoute.snapshot.params.id)
      .subscribe((data) => {
        this.productObj = data;
      });
  }
}
