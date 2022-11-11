import { Component, OnInit } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects/subjects.service';
import { subject } from 'src/app/models/subjects';
import { Location } from '@angular/common';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})

export class SubjectsComponent implements OnInit {

  constructor(private service: SubjectsService, private location: Location) { }

  ngOnInit(): void {
    this.getSubjects()
  }

  subjects: subject[] = []

  flag: boolean = false;

  subject?: subject

  materia?: subject

  getSubjects(): void {
    this.service.getSubjects()
      .subscribe(subjects => this.subjects = subjects)
  }

  disable(s: subject): void {
    if (s) {
      s.active = false;
      this.service.changeSubject(s)
      .subscribe()
    }
  }

  triger(): void {
    this.flag = !this.flag;
  }

  addSubject(subject_name: string) {
    subject_name = subject_name.trim()
    var active = true;
    if (!subject_name) { return; }
    this.service.addSubject({ active, subject_name } as subject)
      .subscribe((subject: subject) => {
        this.subjects.push(subject);
      });
  }

  goBack() {
    this.location.back()
  }


}