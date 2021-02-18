import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../product-data.service';
@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css'],
})
export class UserviewComponent implements OnInit {
  userObj: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataservice: ProductDataService
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.id);
    this.dataservice
      .getUserById(this.activatedRoute.snapshot.params.id)
      .subscribe((data: any) => {
        this.userObj = data;
      });
  }
}
