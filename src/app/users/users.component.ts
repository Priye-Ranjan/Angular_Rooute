import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  dataList: Array<Object> = [];
  constructor(private dataservice: ProductDataService) {}

  ngOnInit(): void {
    this.dataservice.getAllUsers().subscribe((data) => {
      this.dataList = data;
    });
  }
}
