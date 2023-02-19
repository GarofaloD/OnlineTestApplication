import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WelcomeComponent} from "../components/welcome/welcome.component";
import {QuestionComponent} from "../components/question/question.component";
import {HeaderComponent} from "../components/header/header.component";
import {QuestionListComponent} from "../components/question-list/question-list.component";
import {HttpClientModule} from  "@angular/common/http";
import {QuestionsService} from "../services/questions.service";
import {RouterModule, Routes} from "@angular/router";
import {ResultsComponent} from "../components/results/results.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    HeaderComponent,
    QuestionListComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QuestionsService, QuestionListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
