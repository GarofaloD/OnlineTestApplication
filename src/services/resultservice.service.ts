import { Injectable } from '@angular/core';
import {Result} from "../common/result/result";

@Injectable({
  providedIn: 'root'
})
export class ResultserviceService {


  private message: Result = new Result;

  constructor() {

  }

  setmessage(data: any){
    this.message = data
  }

  getMessage(){
    return this.message
  }

}
