import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  public isAuthorized = true;
  constructor() { }
  public login(): any{
    this.isAuthorized = true;
  }

  public logout(): any{
    this.isAuthorized = false;
  }
}
