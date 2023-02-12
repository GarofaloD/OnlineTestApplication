import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "../components/welcome/welcome.component";
import {QuestionComponent} from "../components/question/question.component";

const routes: Routes = [
  {path:"welcome", component: WelcomeComponent},
  {path:"question", component: QuestionComponent},
  {path:"", redirectTo: 'welcome', pathMatch: 'full'},
  {path:"**", redirectTo: 'welcome', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
