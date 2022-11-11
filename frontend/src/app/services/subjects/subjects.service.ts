import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { subject } from 'src/app/models/subjects';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private subjectsURL = "http://localhost:8008/api/materias/todos"
  private addURL = "http://localhost:8008/api/materias/nuevo"
  private changeURL = 'http://localhost:8008/api/materias/cambiar'

  getSubjects(): Observable<subject[]> {
    return this.http.get<subject[]>(this.subjectsURL)
  }

  changeSubject(subject: subject): Observable<any> {
    return this.http.put(`${this.changeURL}/${subject.idSubject}`, subject, this.httpOptions)
  }

  addSubject(subject: subject): Observable<any> {
    return this.http.post<subject>(this.addURL, subject, this.httpOptions)
      ;
  }
}