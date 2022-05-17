import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Subject } from "../models/subject";

@Injectable({
  providedIn: 'root'
})
export class FormatService {
selectedSubject: Subject;
  readonly URL_API = "http://localhost:3000/api/subject";

  constructor(private http: HttpClient) {
    this.selectedSubject = new Subject();
  }

  postSubject(subject: Subject) {
    return this.http.post(this.URL_API, subject);
  }

  getSubjects() {
    return this.http.get<Subject[]>(this.URL_API);
  }

  putSubject(subject: Subject) {
    return this.http.put(this.URL_API + `/${subject._id}`, subject);
  }

  deleteSubject(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
