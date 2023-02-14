import { Component } from '@angular/core';
import {QuestionsService} from "../../services/questions.service";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent {

  data: any = []

  constructor(private questions:QuestionsService) {
    this.questions.getDataQuestions().subscribe(data =>{
      console.warn(data)
      this.data = data;
    })
  }

}
