import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Proyects } from "../models/proyects";

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  selectedProyects: Proyects;
  readonly URL_API = "http://localhost:3000/api/proyects";

  constructor(private http: HttpClient) {
    this.selectedProyects = new Proyects();
  }

  postProyects(proyects: Proyects) {
    return this.http.post(this.URL_API, proyects);
  }

  getProyectss() {
    return this.http.get<Proyects[]>(this.URL_API);
  }

  putProyects(proyects: Proyects) {
    return this.http.put(this.URL_API + `/${proyects._id}`, proyects);
  }

  deleteProyects(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
