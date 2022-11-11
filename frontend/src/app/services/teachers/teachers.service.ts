import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { teachers } from 'src/app/models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private teachersURL = "http://localhost:8008/api/docentes/todos"
  private changeURL = "http://localhost:8008/api/docentes/cambiar"
  private teacherURL = "http://localhost:8008/api/docentes/uno"
  private addURL = "http://localhost:8008/api/docentes/nuevo"

  getTeachers(): Observable<teachers[]> {
    return this.http.get<teachers[]>(this.teachersURL)
  }

  changeTeacher(teacher: teachers): Observable<any> {
    return this.http.put(`${this.changeURL}/${teacher.idTeacher}`, teacher, this.httpOptions)
  }

  getTeacher(id: number) {
    return this.http.get<teachers>(`${this.teacherURL}/${id}`);
  }

  addTeacher(teacher: teachers): Observable<teachers> {
    return this.http.post<teachers>(this.addURL, teacher, this.httpOptions);
  }

}