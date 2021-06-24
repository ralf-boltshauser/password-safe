import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as moment from "moment";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient, private router: Router, private _snackBar: MatSnackBar) {
    this.isLoggedIn().subscribe((data: any) => {
      this.loggedIn = true;
    }, (error) => {

    })
  }

  public loggedIn: boolean = false;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  login(username: string, password: string) {
    return this.httpClient.post(environment.apiBaseUrl + '/auth/login', { username, password }).subscribe((data) => {
      if (data) {
        this.loggedIn = true;
        console.log(data);
        this.setSession(data);
        this.router.navigate(['/dashboard']);
      }
    }, (error) => {
      this.openSnackBar('Please check your username and password', 'Check');
    });

  }

  register(username: string, password: string) {
    return this.httpClient.post(environment.apiBaseUrl + '/auth/register', { username, password }).subscribe((data: any) => {
      if (data) {
        this.loggedIn = true;
        this.setSession(data);
        this.router.navigate(['/dashboard']);
      }
    }, (error) => {
      this.openSnackBar('Please check your username and password', 'Check');
    });
  }

  private setSession(authResult: any) {
    localStorage.setItem('access_token', authResult.access_token);
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem("access_token");
    this.router.navigate(['/login']);
  }

  public isLoggedIn() {
    let access_token = '';
    if (!this.loggedIn) {
      access_token = localStorage.getItem('access_token') || '';

    }
    return this.httpClient.get(environment.apiBaseUrl + '/profile', {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      }
    });
  }
}
