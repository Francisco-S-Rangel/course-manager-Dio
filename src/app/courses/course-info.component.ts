import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseSevice } from "./course.service";

@Component({
    templateUrl: "./course-info.component.html"
})
export class CourseInfoComponent implements OnInit{

    course: Course;
    constructor(private activatedRoute : ActivatedRoute,private courseService: CourseSevice){
        
    }

    ngOnInit(): void {
        
    }

}