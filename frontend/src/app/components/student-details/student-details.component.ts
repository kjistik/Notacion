import { Component, Input, OnInit } from '@angular/core';
import { students } from 'src/app/models/student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StudentsService } from 'src/app/services/students/students.service';
import { grades } from 'src/app/models/grades';
import { GradesService } from 'src/app/services/grades/grades.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private studentService: StudentsService, private location: Location,
    private route: ActivatedRoute, private gradeService: GradesService) { }

  ngOnInit(): void {
    this.getStudent();
    this.getGrades();
  }
  @Input() student?: students

  grades: grades[] = []

  flag: boolean = false;

  flag1: boolean = false;

  getStudent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.studentService.getStudent(id)
      .subscribe(student => this.student = student);
  }

  goBack(): void {
    this.location.back();
  }

  add() {
    this.flag = true;
    this.flag1 = false;
  }

  edit() {
    this.flag = false;
    this.flag1 = true;
  }

  getGrades() {
    this.gradeService.getgrades()
      .subscribe(grades => this.grades = grades)
  }

}