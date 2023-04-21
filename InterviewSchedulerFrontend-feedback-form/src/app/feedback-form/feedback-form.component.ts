import { Component, OnInit } from '@angular/core';
import { Feedback } from '../Feedback';
import { FeedbackServiceService } from '../service/feedback-service.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {

  feedback:Feedback = new Feedback("",0,"","","","","");
  message: any;
  constructor(private service:FeedbackServiceService){
    
  }
 
 

  submitDetails(){
    
    console.log(this.feedback);

    let resp = this.service.doRegister(this.feedback);
    resp.subscribe(data=>this.message=data);
    alert("details added");
  }




}

