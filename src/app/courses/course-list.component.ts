import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseSevice } from "./course.service";

@Component({
    templateUrl: "./course-list.component.html"
})
export class CourseListComponent implements OnInit {
    
    filteredCourse : Course[]=[];
    courses: Course []= [];
    _filterBy: string;

    constructor(private courseService: CourseSevice){

    }
    ngOnInit(): void{
      this.courses = this.courseService.retrieveAll();
      this.filteredCourse = this.courses;
    }

    set filter(value: string){
        this._filterBy = value;
        this.filteredCourse = this.courses.filter((course: Course)=> course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase())>-1);
    }
    get filter(){
        return this._filterBy;
    }

}