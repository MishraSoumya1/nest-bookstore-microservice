import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import UserDto from './dto/user.dto';
import { Observable } from 'rxjs';
import { USERS_PATTERNS } from '@app/contracts/users/users.pattern';
import { USERS_CLIENT } from './constant';

@Injectable()
export class UserService {
  constructor(@Inject(USERS_CLIENT) private userClient: ClientProxy) {}

  findAllUsers(): Observable<UserDto[]> {
    return this.userClient.send(USERS_PATTERNS.FIND_ALL_USERS, {});
  }
}
