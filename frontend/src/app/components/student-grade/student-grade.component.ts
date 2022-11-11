import { Component, OnInit } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects/subjects.service';
import { subject } from 'src/app/models/subjects';
import { teachers } from 'src/app/models/teacher';
import { TeachersService } from 'src/app/services/teachers/teachers.service';
import { GradesService } from 'src/app/services/grades/grades.service';
import { StudentsService } from 'src/app/services/students/students.service';
import { ActivatedRoute } from '@angular/router';
import { students } from 'src/app/models/student';
import { grades } from 'src/app/models/grades';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-grade',
  templateUrl: './student-grade.component.html',
  styleUrls: ['./student-grade.component.css']
})
export class StudentGradeComponent implements OnInit {

  constructor(private subjectService: SubjectsService, private teacherService: TeachersService,
    private gradeService: GradesService, private studentService: StudentsService,
    private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getSubjects();
    this.getTeachers();
    this.getGrades();
    this.getStudent();
  }

  subjects: subject[] = []

  teachers: teachers[] = []

  subject?: subject

  student?: students;

  flag1: boolean = false

  flag2: boolean = false

  teacher?: teachers

  grade?: number

  grades: grades[] = []

  numbers: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ]

  getGrades(): void {
    this.gradeService.getgrades()
      .subscribe(grades => this.grades = grades)
  }

  getSubjects(): void {
    this.subjectService.getSubjects()
      .subscribe(subjects => this.subjects = subjects)
  }

  getTeachers(): void {
    this.teacherService.getTeachers()
      .subscribe(teachers => this.teachers = teachers)
  }

  getStudent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.studentService.getStudent(id)
      .subscribe(student => this.student = student);
  }

  selectSubject(subject: subject) {
    this.subject = subject;
  }

  changeFlag1() {
    this.flag1 = !this.flag1
  }

  changeFlag2() {
    this.flag2 = !this.flag2
  }

  addGrade(grade: any, grades_student: students, grades_teacher: teachers) {
    const idGrade = undefined;
    if (grades_student && grades_teacher)
      this.gradeService.addgrade({ idGrade, grade, grades_student, grades_teacher } as grades)
        .subscribe((grade: grades) => {
          this.grades.push(grade);
        });
    window.location.reload()
  }

}