import {Component, Injectable, OnInit} from '@angular/core';
import {QuestionsService} from "../../services/questions.service";
import {Question} from "../../common/question/question";
import {tap} from "rxjs";
import {ResultserviceService} from "../../services/resultservice.service";
import {Result} from "../../common/result/result";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent{

  public questionsList: any = []
  public points: number = 0
  public rightAnswerCount: number = 0

  //messageTest = "Coming from the question list"

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
  constructor(private questionService: QuestionsService, private resultService: ResultserviceService) {

  }

  ngOnInit(): void{
    this.listQuestions()
    // this.passResults()
    //this.resultService.setMessage(this.messageTest)
  }

  listQuestions(){

    this.questionService.getDataQuestions().subscribe(
      data => {
        this.questionsList = data;
        console.log(this.questionsList)

        for (let i = 0; i < this.questionsList.length; i++) {
          console.log(this.questionsList[i]["correctAnswer"])
        }
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
    console.log('right Answer')
    this.rightAnswerCount++
    console.log(this.rightAnswerCount)
  }

  computeResults(){

    let result = new Result();
    result.score = this.points;
    result.correctAnswer = this.rightAnswerCount
    result.wrongAnswer = this.questionsList.length - this.rightAnswerCount
    this.resultService.setmessage(result)

  }








}
