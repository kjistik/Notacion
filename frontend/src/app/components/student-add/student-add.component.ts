import { Component, OnInit } from '@angular/core';
import { students } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students/students.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  students: any;

  constructor(private service: StudentsService, private location: Location) { }

  addStudent(student_name: string, student_lastName: string) {
    student_name = student_name.trim()
    student_lastName = student_lastName.trim()
    const active = true
    if (!student_name) { return; }
    this.service.addStudent({ active, student_lastName, student_name } as students)
      .subscribe((student: students) => {
        this.students.push(student);
      });
    this.back();
  }


  back() {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
