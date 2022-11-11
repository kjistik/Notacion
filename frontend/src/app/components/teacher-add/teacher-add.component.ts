import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { subject } from 'src/app/models/subjects';
import { teachers } from 'src/app/models/teacher';
import { TeachersService } from 'src/app/services/teachers/teachers.service';
import { SubjectsService } from 'src/app/services/subjects/subjects.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {

  constructor(private teacherService: TeachersService, private location: Location,
    private subjectService: SubjectsService) { }

  teachers: teachers[] = []

  subject?: subject

  subjects: subject[] = []

  ngOnInit(): void {
    this.getTeachers()
    this.getSubjects()
  }

  addTeacher(teacher_name: string, teacher_lastName: string, subject_teacher: subject) {
    teacher_name = teacher_name.trim()
    teacher_lastName = teacher_lastName.trim()
    const active = true
    const idTeacher = undefined
    if (!teacher_name && teacher_lastName) { return; }
    this.teacherService.addTeacher({ idTeacher, active, teacher_lastName, teacher_name, subject_teacher } as teachers)
      .subscribe((teacher: teachers) => {
        this.teachers.push(teacher);
      });
    this.back();
  }

  back(): void {
    this.location.back()
  }

  getSubjects() {
    this.subjectService.getSubjects()
      .subscribe(subjects => this.subjects = subjects)
  }
  getTeachers() {
    this.teacherService.getTeachers()
      .subscribe(teachers => this.teachers = teachers)
  }
}
