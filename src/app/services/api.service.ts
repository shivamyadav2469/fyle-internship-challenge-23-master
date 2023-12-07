import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // getUser(githubUsername: string) {
  //   return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  // }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
 
  getData(): Observable<any> {
    const url = "https://api.github.com/users";
    return this.httpClient.get<any>(url);
  }

  getrepos(userId:string): Observable<any> {
    const url = `https://api.github.com/users/${userId}/repos`; 
    return this.httpClient.get<any>(url);
  }

  getname(userId: string): Observable<any> {
    const url = `https://api.github.com/users/${userId}`;
    return this.httpClient.get<any>(url);
   }

  getLanguages(repoName: string, userId: string): Observable<any> {
    const url = `https://api.github.com/repos/${userId}/${repoName}/languages`;
    return this.httpClient.get<any>(url);
   }

}