import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';


const routes: Routes = [
  {path:"",redirectTo:"feedback-form",pathMatch:"full"},
  {path:"feedback-form",component:FeedbackFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }