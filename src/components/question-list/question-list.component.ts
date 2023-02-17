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


  shuffleOptions(){
    let listToShuffle = document.querySelector('.options ul')
    // @ts-ignore
    for (let i = listToShuffle.children.length; i >= 0; i--) {
      // @ts-ignore
      listToShuffle.appendChild(listToShuffle.children[Math.random() * i | 0]);
    }
  }

  addPoints(){
    this.points = this.points + 1;
    console.log('right answer')
    console.log(this.points)
  }



}
