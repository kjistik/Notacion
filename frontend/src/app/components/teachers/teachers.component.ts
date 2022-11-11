import { Component, OnInit } from '@angular/core';
import { TeachersService } from 'src/app/services/teachers/teachers.service';
import { teachers } from 'src/app/models/teacher';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers: teachers[] = []

  constructor(private service: TeachersService) { }

  ngOnInit(): void {
    this.getTeachers()
  }

  getTeachers(): void {
    this.service.getTeachers()
      .subscribe(teachers => this.teachers = teachers)
  }

  disable(teacher: teachers): void {
    teacher.active = false;
    this.service.changeTeacher(teacher)
    .subscribe();
  }

  reload(){
    window.location.reload()
  }
}
