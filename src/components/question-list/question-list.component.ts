import { Component, OnInit } from '@angular/core';
import {QuestionsService} from "../../services/questions.service";
import {Question} from "../../common/question/question";
import {tap} from "rxjs";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent{

  public questionsList: any = []
  public points: number = 0


  //
  // constructor(private questions:QuestionsService) {
  //   this.questions.getDataQuestions().subscribe(data =>{
  //     console.warn(data)
  //     this.questionsList = data;
  //
  //   })
  // }



  // questions: Question[] = []
  //
  constructor(private questionService: QuestionsService) {

  }

  ngOnInit(): void{
    this.listQuestions()
  }

  listQuestions(){
    this.questionService.getDataQuestions().subscribe(
      data => {
        console.warn(data)
        this.questionsList = data;
      }
    )
  }






}
