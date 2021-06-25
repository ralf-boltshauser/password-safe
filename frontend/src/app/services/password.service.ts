import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Password } from '../password';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private httpClient: HttpClient, private userService: UserService) {}

  getAll() {
    return this.httpClient.get(environment.apiBaseUrl + '/passwords', {
      headers: {
        'Authorization': `Bearer ${this.userService.getAccessToken()}`,
      }
    });
  }


  createPassword(password: Password) {
    return this.httpClient.post(environment.apiBaseUrl + '/passwords', password, {
      headers: {
        'Authorization': `Bearer ${this.userService.getAccessToken()}`,
      }
    });
  }

  deletePassword(id: number) {
    return this.httpClient.delete(`${environment.apiBaseUrl}/passwords/${id}`, {
      headers: {
        'Authorization': `Bearer ${this.userService.getAccessToken()}`,
      }
    });
  }
}
