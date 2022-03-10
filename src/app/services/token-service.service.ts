import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  // jwt doesn't decode it so i just store it in app
  // TODO: store it in cookie
  private token: string
  constructor() { }

  public setToken(token: string) : void{
    this.token = token;
  }

  public getToken(): string {
    return this.token;
  }

  public deleteToken(): void {
    this.token = null;
  }
}
