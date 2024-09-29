import { Body, Controller, Logger, Post } from '@nestjs/common';
import BookDto from './dto/book.dto';
import { BooksService } from './books.service';
import { map } from 'rxjs';

@Controller('books')
export class BooksController {
  private readonly logger = new Logger(BooksController.name);
  constructor(private bookService: BooksService) {}

  private mapBookDto(bookDto: BookDto) {
    return {
      id: bookDto.id,
      name: bookDto.name,
    };
  }

  @Post('/add')
  addbooks(@Body() book: BookDto) {
    this.logger.log('Payload coming tp contoller', JSON.stringify(book));
    return this.bookService.addBooks(book).pipe(map(this.mapBookDto));
  }
}
