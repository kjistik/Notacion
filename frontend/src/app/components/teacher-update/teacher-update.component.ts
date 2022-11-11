import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { teachers } from 'src/app/models/teacher';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.css']
})
export class TeacherUpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: TeachersService, private location: Location) { }

  ngOnInit(): void {
    this.getTeacher();
  }

  teacher?: teachers

  getTeacher(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.service.getTeacher(id)
      .subscribe(teacher => this.teacher = teacher);
  }


  changeTeacher(): void {
    if (this.teacher) {
      this.service.changeTeacher(this.teacher)
        .subscribe(() => window.location.reload());
    }
  }
}


