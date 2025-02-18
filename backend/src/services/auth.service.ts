import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(email: string, password: string) {
    if (email === 'admin@poralekha.net' && password === 'admin123') {
      return { message: 'Login successful', token: 'fake-jwt-token' };
    }
    return { message: 'Invalid credentials' };
  }
}
