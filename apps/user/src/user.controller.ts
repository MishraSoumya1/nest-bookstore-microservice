import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import UserDto from '@app/contracts/users/user.dto';
import { MessagePattern } from '@nestjs/microservices';
import { USERS_PATTERNS } from '@app/contracts/users/users.pattern';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern(USERS_PATTERNS.FIND_ALL_USERS)
  finsAllUsers(): UserDto[] {
    return this.userService.findAllUsers();
  }
}
