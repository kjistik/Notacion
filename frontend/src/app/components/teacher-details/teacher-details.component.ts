import { Component, Input, OnInit } from '@angular/core';
import { grades } from 'src/app/models/grades';
import { teachers } from 'src/app/models/teacher';
import { GradesService } from 'src/app/services/grades/grades.service';
import { ActivatedRoute } from '@angular/router';
import { TeachersService } from 'src/app/services/teachers/teachers.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {

  constructor(private location: Location, private gradesService: GradesService,
    private route: ActivatedRoute, private teacherService: TeachersService) { }

  ngOnInit(): void {
    this.getTeacher();
    this.getGrades();
  }

  grades: grades[] = []

  flag = false

  @Input() teacher?: teachers

  getGrades(): void {
    this.gradesService.getgrades()
      .subscribe(grades => this.grades = grades)
  }

  getTeacher(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.teacherService.getTeacher(id)
      .subscribe(teacher => this.teacher = teacher);
  }

  goBack() {
    this.location.back()
  }

  changeFlag() {
    this.flag = true
    
  }
}