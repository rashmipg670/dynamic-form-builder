import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role: 'admin' | 'user' = 'user';

  setRole(role: 'admin' | 'user') {
    this.role = role;
  }

  getRole() {
    return this.role;
  }
}
