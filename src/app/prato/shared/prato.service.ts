import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PratoService {

  private url: string = "http://localhost:62203/api/prato";

  private urlrest: string = "http://localhost:62203/api/restaurante";

  constructor(private http: Http) { }

  getUsers(nome) {
    return this.http.get(this.url + '?nome=' + nome)
      .map(res => res.json());
  }

  getRestaurants(nome) {
    return this.http.get(this.urlrest + '?nome=' + nome)
      .map(res => res.json());
  }

  getUser(id) {

    return this.http.get(this.getUserUrl(id))
      .map(res => res.json());
  }

  addUser(restaurant) {

    return this.http.post(this.url, restaurant)
      .map(res => res.json());
  }

  updateUser(restaurant) {

    return this.http.put(this.getUserUrl(restaurant.id), restaurant)
      .map(res => res.json());
  }

  deleteUser(id) {

    return this.http.delete(this.getUserUrl(id))
      .map(res => res.json());
  }

  private getUserUrl(id) {

    return this.url + "/" + id;
  }
}
