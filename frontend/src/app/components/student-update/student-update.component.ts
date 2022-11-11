import { Component, OnInit, Input } from '@angular/core';
import { students } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students/students.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  constructor(private service: StudentsService, private location: Location, private route: ActivatedRoute) { }

  @Input() student?: students

  getStudent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.service.getStudent(id)
      .subscribe(student => this.student = student);
  }
   
  changeStudent(): void {
    if (this.student) {
      this.service.changeStudent(this.student)
        .subscribe(() => this.goBack());
    }
  }
  
  goBack(): void {
    this.location.back()
  }


  ngOnInit(): void {
    this.getStudent()
  }

}
