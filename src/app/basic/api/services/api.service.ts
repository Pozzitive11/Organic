import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(protected http: HttpClient) {}

  protected get<T>() {
    return this.http.get<T>(environment.apiUrl);
  }
}
