import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FeedbackServiceService } from './service/feedback-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FeedbackServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
