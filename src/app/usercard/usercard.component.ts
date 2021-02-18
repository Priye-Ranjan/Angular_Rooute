import { Component, Input, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css'],
})
export class UsercardComponent implements OnInit {
  @Input() userData: any = {};
  constructor(private dataUser: ProductDataService) {}

  ngOnInit(): void {}

  deleteUser(id: number) {
    this.dataUser.delUser(id).subscribe(() => {});
  }
}
