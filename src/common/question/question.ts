export class Question {

  constructor(public category: string,
              public correctAnswer: string,
              public difficulty: string,
              public id: string,
              public incorrectAnswer: string[],
              public isNiche: boolean,
              public regions: string[],
              public tags: string[],
              public type: string) {
  }
}
