import { Injectable } from '@angular/core';
import { students } from '../../models/student';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private studentsURL = "http://localhost:8008/api/alumnos/todos"
  private studentURL = "http://localhost:8008/api/alumnos/uno"
  private addURL = "http://localhost:8008/api/alumnos/nuevo"
  private changeURL = "http://localhost:8008/api/alumnos/cambiar"

  getStudent(id: number) {
    return this.http.get<students>(`${this.studentURL}/${id}`);
  }

  addStudent(student: students): Observable<students> {
    return this.http.post<students>(this.addURL, student, this.httpOptions)
      ;
  }

  getStudents(): Observable<students[]> {
    return this.http.get<students[]>(this.studentsURL)
  }

  changeStudent(student: students): Observable<any> {
    return this.http.put(`${this.changeURL}/${student.idStudent}`, student, this.httpOptions)
  }
}