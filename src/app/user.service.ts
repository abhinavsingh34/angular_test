import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  [x: string]: any;
  public url = 'http://localhost:3000/registration';
  constructor(private httpClient: HttpClient) {

}
  /**
   * 
   * @param url Get Request
   * @param serviceRequest 
   * @param token 
   */
  postRequestResponse(serviceRequest) {
    return this.httpClient.post(this.url, serviceRequest);
  }
  getResponse() {
    return this.httpClient.get(this.url);
  }
  deleteStudentData(id) {
    return this.httpClient.delete('http://localhost:3000/registration'+ '/'+id);
  }
  updateStudentdData(user, id) {
    return this.httpClient.put('http://localhost:3000/registration'+ '/'+id, user);
  }
      /**
     ** create getSingleStudentDetail() function to get the data by using 'GET' method request based on selected id which are passing as a parameter. 
     */
    getSingleStudentDetail(id: any) {
      return this.httpClient.get('http://localhost:3000/registration'+ '/'+id);
  }
}
