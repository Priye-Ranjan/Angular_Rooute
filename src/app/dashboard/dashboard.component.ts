import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  countAllProduct: Array<Object> = [];
  countAllUser: Array<Object> = [];
  constructor(private dataProduct: ProductDataService) {}

  ngOnInit(): void {
    this.dataProduct.getAllProducts().subscribe((data: Array<any>) => {
      this.countAllProduct = data;
    });
    console.log(this.countAllProduct);
    this.dataProduct.getAllUsers().subscribe((data: Array<any>) => {
      this.countAllUser = data;
    });
    // this.countAllProduct = this.dataProduct.countProduct();
    //this.countAllUser = this.dataProduct.countUser();
  }
}
