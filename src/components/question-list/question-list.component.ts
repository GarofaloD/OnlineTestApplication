import {Component, Injectable, OnInit, AfterViewInit} from '@angular/core';
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
export class QuestionListComponent implements OnInit, AfterViewInit{

  public questionsList: any = []
  public points: number = 0
  public rightAnswerCount: number = 0



  constructor(private questionService: QuestionsService, private resultService: ResultserviceService) {

  }

  ngOnInit(): void{
    this.listQuestions()
    // this.passResults()
    //this.resultService.setMessage(this.messageTest)
    //this.shuffleOptions()
  }

  listQuestions(){
    this.questionService.getDataQuestions().subscribe(
      data => {
        this.questionsList = data;
      }
    )
    console.log('loaded')
  }

  ngAfterViewInit() {

      setTimeout(function (){

        document.querySelectorAll('.options ul').forEach(item=>{
          for (let i = item.children.length; i >= 0; i--) {
            item.appendChild(item.children[Math.random() * i | 0]);
          }
        })
        console.log('shufflesfdsdfsdfd')
      },300)


  }


  shuffleOptions(){
    //
    // document.addEventListener("DOMContentLoaded", (event)=>{
    //
    //   setTimeout(function (){
    //
    //     document.querySelectorAll('.options ul').forEach(item=>{
    //       for (let i = item.children.length; i >= 0; i--) {
    //         item.appendChild(item.children[Math.random() * i | 0]);
    //       }
    //     })
    //
    //   },5000)
    //   console.log('shuffled')
    // })

    // document.querySelectorAll('.options ul').forEach(item=>{
    //   for (let i = item.children.length; i >= 0; i--) {
    //     item.appendChild(item.children[Math.random() * i | 0]);
    //   }
    // })

  }





  addPoints(){
    this.points = this.points + 1;
    this.rightAnswerCount++
  }

  computeResults(){

    let result = new Result();
    result.score = this.points;
    result.correctAnswer = this.rightAnswerCount
    result.wrongAnswer = this.questionsList.length - this.rightAnswerCount
    this.resultService.setmessage(result)

  }








}
