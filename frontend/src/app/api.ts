import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }

  getBoms(): Observable<any> {
    return this.http.get(`${this.baseUrl}/boms`);
  }

  getDocuments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/documents`);
  }

  getEngineeringChanges(): Observable<any> {
    return this.http.get(`${this.baseUrl}/engineering-changes`);
  }

  getNpiProcesses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/npi-processes`);
  }

  getQualityIssues(): Observable<any> {
    return this.http.get(`${this.baseUrl}/quality-issues`);
  }

  getRequirements(): Observable<any> {
    return this.http.get(`${this.baseUrl}/requirements`);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }
}