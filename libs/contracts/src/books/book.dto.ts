import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

class BookDto {
  @IsInt()
  @IsNotEmpty()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  @Length(3, 15)
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 15)
  readonly author: string;

  @IsDateString()
  @IsNotEmpty()
  readonly datePublished: string;
}

export default BookDto;
