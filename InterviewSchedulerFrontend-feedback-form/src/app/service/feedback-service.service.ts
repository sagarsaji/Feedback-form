import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  constructor(private http:HttpClient) { 
  }

  doRegister(feedback: any) {
    return this.http.post("http://localhost:8080/feedback/emp",feedback,{responseType:'text' as 'json'})
  }

  


}
