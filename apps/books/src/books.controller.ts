import { Controller, Logger } from '@nestjs/common';
import { BooksService } from './books.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import BookDto from '@app/contracts/books/book.dto';
import { BOOKS_PATTERN } from '@app/contracts/books/books.patttern';

@Controller()
export class BooksController {
  private readonly logger = new Logger(BooksController.name);

  constructor(private readonly booksService: BooksService) {}

  @MessagePattern(BOOKS_PATTERN.ADD_BOOK)
  addBook(@Payload() book: BookDto) {
    this.logger.log('Details coming here', book);
    return this.booksService.addBook(book);
  }
}
