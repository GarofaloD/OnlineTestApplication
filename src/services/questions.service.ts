import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Question} from "../common/question/question";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private baseURL = 'https://the-trivia-api.com/api/questions?limit=10&categories=science,history'


  constructor(private http: HttpClient) { }


  getDataQuestions(){
    return this.http.get(this.baseURL)
  }

   // getDataQuestions(): Observable<Question[]>{
   //   return this.http.get<GetResponse>(this.baseURL).pipe(
   //     map(response => response._embedded.questions)
   //
   //   );
   // }



}

 // interface GetResponse{
 //   _embedded:{
 //     questions: Question[];
 //   }
 // }
