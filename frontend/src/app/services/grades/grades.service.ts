import { Injectable } from '@angular/core';
import { students } from '../../models/student';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { grades } from 'src/app/models/grades';
@Injectable({
  providedIn: 'root'
})
export class GradesService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private gradesURL = "http://localhost:8008/api/calificaciones"
  private gradeURL = "http://localhost:8008/api/calificaciones/uno"
  private addURL = "http://localhost:8008/api/calificaciones/nuevo"
  private changeURL = "http://localhost:8008/api/calificaciones/cambiar"

  getgrade(id: number) {

    return this.http.get<grades>(`${this.gradeURL}/${id}`);
  }

  addgrade(grade: grades): Observable<grades> {
    return this.http.post<grades>(this.addURL, grade, this.httpOptions)
      ;
  }

  getgrades(): Observable<grades[]> {
    return this.http.get<grades[]>(this.gradesURL + "/todos")
  }

  changeGrade(grade: grades): Observable<any> {
    return this.http.put(`${this.changeURL}/${grade.idGrade}`, grade, this.httpOptions)
  }

  searchGrade(term: number): Observable<grades[]> {
    if (!term) {
      return of([]);
    }
    return this.http.get<grades[]>(`${this.gradesURL}/?grades_student=${term}`)
  }
}