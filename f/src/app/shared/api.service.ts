import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8080/api/crud';
  //for backend node server 

  //baseUrl='http://localhost:3000/employee/';
  //for json-server
  constructor(private httpClient: HttpClient) { }

  postEmployee(data: any) {
    return this.httpClient.post<any>(this.baseUrl + "/addEmployee", data)
      .pipe(map(res => {
        alert('Data save Successfully..!');
        return res;
      }));
  }

  getEmployee() {
    return this.httpClient.get<any>(this.baseUrl + "/getAllEmployee")
      .pipe(map((res: any) => {
        return res;
      }));
  }

  updateEmployee(data: any, id: number) {
    return this.httpClient.put<any>(this.baseUrl + "/updateEmployee", data)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  deleteEmployee(id: number) {    
  let data=`${this.baseUrl}/deleteEmployee/${id}`;
    return this.httpClient.delete<any>(data)
    .pipe(map((res: any) => {
      //alert('Amol');
      return res;
    }));
    
    // return this.httpClient.delete<any>(this.baseUrl + "/deleteEmployee")
    // .pipe(map((res: any) => {
    //   //alert('Amol');
    //   return res;
    // }));
  

    //let res=confirm(`you want to delete this fields..${typeof(id)}`);
    // if(res)
    // {
    //   return this.httpClient.delete<any>(this.baseUrl+"deleteEmployee",id)
    //   .pipe(map((res: any) => {
    //   return res;
    //   }));
    // } 
  }

















  // deleteEmployee(id: <any>) {
  //   let res=confirm(`you want to delete this fields..${id}`);
  //   if(res)
  //   {
  //     return this.httpClient.delete<any>(this.baseUrl+"deleteEmployee",id)
  //     .pipe(map((res: any) => {

  //       alert('you want to delete this fields..');
  //       return res;
  //     }));
  //   } 
  // }
}
