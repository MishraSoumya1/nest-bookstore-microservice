import { Injectable } from '@nestjs/common';
import UserDto from '@app/contracts/users/user.dto';

@Injectable()
export class UserService {
  private users: UserDto[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'doe',
      age: 25,
    },
    {
      id: 2,
      firstName: 'Will',
      lastName: 'Smith',
      age: 25,
    },
  ];

  findAllUsers(): UserDto[] {
    return this.users;
  }
}
