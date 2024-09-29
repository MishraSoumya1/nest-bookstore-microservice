import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { USERS_CLIENT } from './constant';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USERS_CLIENT,
        transport: Transport.TCP,
        options: { port: 5001 }, // Port pprovided in user micro service
      },
    ]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
