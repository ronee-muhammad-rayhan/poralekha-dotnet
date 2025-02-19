import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAllUsers() {
    return [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'John DoeNA', email: 'john@example.com' },
      { id: 4, name: 'Jane SmithHA', email: 'jane@example.com' },
    ];
  }
}
