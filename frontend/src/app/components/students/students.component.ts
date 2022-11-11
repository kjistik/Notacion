import { Component, OnInit } from '@angular/core';
import { students } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students/students.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  selected?: students;

  alumnos: students[] = []

  getStudents(): void {
    this.service.getStudents()
      .subscribe(students => this.alumnos = students)
  }

  disable(student: students): void {
    student.active = false;
    this.service.changeStudent(student)
      .subscribe();
  }

  reload() {
    window.location.reload()
  }

  constructor(private service: StudentsService) { }

  ngOnInit(): void {
    this.getStudents()
  }
  
}