import { Component, Input, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css'],
})
export class ProductcardComponent implements OnInit {
  @Input() productData: any = {};

  constructor(private dataProduct: ProductDataService) {}

  ngOnInit(): void {}

  deleteProduct(id: number) {
    this.dataProduct.deleteProduct(id).subscribe((data) => {});
  }
}
