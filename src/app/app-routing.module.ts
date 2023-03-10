import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "../components/welcome/welcome.component";
import {QuestionComponent} from "../components/question/question.component";
import {QuestionListComponent} from "../components/question-list/question-list.component";
import {ResultsComponent} from "../components/results/results.component";



const routes: Routes = [
  {path:"welcome", component: WelcomeComponent},
  {path:"question-list", component: QuestionListComponent},
  {path:"quiz-results", component: ResultsComponent},
  {path:" ", redirectTo: 'welcome', pathMatch: 'full'},
  {path:"**", redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
