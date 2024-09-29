import { Controller, Get } from '@nestjs/common';
import UserDto from './dto/user.dto';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAllUsers(): Observable<UserDto[]> {
    return this.userService.findAllUsers();
  }
}
