import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Computer } from '../interfaces/computer';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  constructor(
    private http: HttpClient) { }

  getComputers(): Observable<Computer[]> {
    return this.http.get<Computer[]>(`${environment.apiBaseUrl}/v1/computer`)
  }
}
