import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class PasswordService {
  accountCredentials = [];

  getAccountCredentials(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.accountCredentials);
    })
  }

  getAccountCredential(accountCredentialId): Promise<any> {
    let id = Number(accountCredentialId);
    return new Promise(resolve => {
      const accountCredential = this.accountCredentials.find(accountCredential => accountCredential.id === id);
      if(!accountCredential) {
        throw new HttpException('Account Credentials does not exist', 404);
      }
      resolve(accountCredential);
    })
  }

  addAccountCredential(accountCredential): Promise<any> {
    return new Promise(resolve => {
      this.accountCredentials.push(accountCredential);
      resolve(this.accountCredentials);
    })
  }

  deleteAccountCredential(accountCredentialId): Promise<any> {
    let id = +accountCredentialId;
    return new Promise(resolve => {
      let index = this.accountCredentials.findIndex(accountCredential => accountCredential.id === id);
      if(index === -1) {
        throw new HttpException('Course does not exist', 404);
      }
      this.accountCredentials.splice(index, 1);
      resolve(this.accountCredentials);
    }) 
  }

  updateAccountCredential(accountCredentialId, accountCredential): Promise<any> {
    let id = Number(accountCredentialId);
    return new Promise(resolve => {
      let index = this.accountCredentials.findIndex(accountCredential => accountCredential.id === id);
      this.accountCredentials[index] = accountCredential;
      resolve(this.accountCredentials);
    })
  }
}
