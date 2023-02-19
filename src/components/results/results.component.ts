import {Component, OnInit} from '@angular/core';
import {QuestionsService} from "../../services/questions.service";
import {QuestionListComponent} from "../question-list/question-list.component";
import {ResultserviceService} from "../../services/resultservice.service";


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  resultOutput : any

  constructor(private questionListComponent: QuestionListComponent, private resultService: ResultserviceService) {

  }

  ngOnInit() {
    this.resultOutput = this.resultService.getMessage()

    console.log(this.resultOutput.correctAnswer)

  }






}
