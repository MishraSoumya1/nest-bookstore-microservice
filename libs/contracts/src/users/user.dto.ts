import { IsInt, IsNotEmpty, IsString, Length, Max, Min } from 'class-validator';

class UserDto {
  @IsInt()
  @IsNotEmpty()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  @Length(5, 15)
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 15)
  readonly lastName: string;

  @IsInt()
  @IsNotEmpty()
  @Min(10)
  @Max(100)
  readonly age: number;
}

export default UserDto;
