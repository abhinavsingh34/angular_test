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
  /**
   * 
   * @param url Get Request
   * @param serviceRequest 
   * @param token 
   */
  postRequestResponse(serviceRequest) {
    return this.httpClient.post(this.url, serviceRequest);
  }
  getResponse(url: string) {
    return this.httpClient.get(url);
  }
  deleteStudentData(id: number) {
    return this.httpClient.delete(this.url, id);
  }
  updateStudentdData(user, id: number) {
    return this.httpClient.put(this.url, id, user);
  }
}
