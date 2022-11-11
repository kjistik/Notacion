import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { StudentsService } from './services/students/students.service';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentUpdateComponent } from './components/student-update/student-update.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';
import { TeacherAddComponent } from './components/teacher-add/teacher-add.component';
import { TeacherUpdateComponent } from './components/teacher-update/teacher-update.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'details_student/:id', component: StudentDetailsComponent },
  { path: 'students_update/:id', component: StudentUpdateComponent },
  { path: 'add_student', component: StudentAddComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'teacher_details/:id', component: TeacherDetailsComponent },
  { path: 'add_teacher', component: TeacherAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
