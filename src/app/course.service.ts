import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
  
  constructor() { }

  getCourses(){
    return ["C++", "Python", "Javascript"];
  }
}
