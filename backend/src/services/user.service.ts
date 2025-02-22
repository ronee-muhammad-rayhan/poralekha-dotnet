import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAllUsers() {
    return [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'John DoeNA', email: 'john@example.com' },
      { id: 4, name: 'Jane SmithHA', email: 'jane@example.com' },
      { id: 5, name: 'RoneeMRayhan', email: 'roneemrayhan@rayhanworld.com' },
      { id: 6, name: 'Shafikul Islam', email: 'shafik@rayhanworld.com' },
      { id: 7, name: 'Shafikul Islam 2', email: 'shafik2@rayhanworld.com' },
      { id: 8, name: 'Shafikul Islam 3', email: 'shafik3@rayhanworld.com' },
    ];
  }
}
