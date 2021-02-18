import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Array<Object>> {
    return this.http.get<Array<Object>>(
      'https://5cdd0a92b22718001417c19d.mockapi.io/api/products'
    );
    // return this.User;
  }

  getProductById(id: number): Observable<Object> {
    return this.http.get(
      `https://5cdd0a92b22718001417c19d.mockapi.io/api/products/${id}`
    );
    // return this.data.find((p) => p.id == id);
  }
  getAllUsers(): Observable<Array<Object>> {
    return this.http.get<Array<Object>>(
      'https://5cdd0a92b22718001417c19d.mockapi.io/api/users'
    );
    // return this.dataUser;
  }

  getUserById(id: number): Observable<Object> {
    // return this.dataUser.find((x) => x.id == id);
    return this.http.get(
      `https://5cdd0a92b22718001417c19d.mockapi.io/api/users/${id}`
    );
  }

  addProduct(dataObj: any) {
    return this.http.post(
      'https://5cdd0a92b22718001417c19d.mockapi.io/api/products',
      dataObj
    );
    // dataObj.id = this.data.length + 1;
    // this.data.push(dataObj);
  }

  addUser(dataObj: any) {
    return this.http.post(
      'https://5cdd0a92b22718001417c19d.mockapi.io/api/users',
      dataObj
    );
    // dataObj.id = this.dataUser.length + 1;
    // this.dataUser.push(dataObj);
  }

  deleteProduct(id: number) {
    return this.http.delete(
      `https://5cdd0a92b22718001417c19d.mockapi.io/api/products/${id}`
    );
    // this.data.splice(
    //   this.data.findIndex((a) => a.id == id),
    //   1
    // );
  }

  delUser(id: number) {
    return this.http.delete(
      `https://5cdd0a92b22718001417c19d.mockapi.io/api/users/${id}`
    );
    // this.dataUser.splice(
    //   this.dataUser.findIndex((u) => u.id == id),
    //   1
    // );
  }

  // countProduct(): Observable<Array<Object>> {
  //   return this.http.get<Array<Object>>(
  //     'https://5cdd0a92b22718001417c19d.mockapi.io/api/users'
  //   );

  //   // return this.data.length;
  // }
  countUser() {
    // return this.dataUser.length;
  }

  updateProduct(id: number, dataObj: any) {
    return this.http.put(
      `https://5cdd0a92b22718001417c19d.mockapi.io/api/products/${id}`,
      dataObj
    );
    // let findObj = this.data.findIndex((obj) => obj.id == id);
    // dataObj.id = id;
    // this.data[findObj] = dataObj;
  }

  updateUser(id: number, dataObj: any) {
    return this.http.put(
      `https://5cdd0a92b22718001417c19d.mockapi.io/api/users/${id}`,
      dataObj
    );
    // dataObj.image =
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4Z98aenUNf9QpMuWXolz8e2DgU6ellMGuA&usqp=CAU';
    // let findObj = this.dataUser.findIndex((obj) => obj.id == id);
    // dataObj.id = id;
    // this.dataUser[findObj] = dataObj;
  }
}
