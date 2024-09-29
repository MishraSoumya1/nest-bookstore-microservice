import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import BookDto from './dto/book.dto';
import { BOOKS_PATTERN } from '@app/contracts/books/books.patttern';
import { Observable } from 'rxjs';
import { BOOKS_CLIENT } from './constant';

@Injectable()
export class BooksService {
  private readonly logger = new Logger(BooksService.name);
  constructor(@Inject(BOOKS_CLIENT) private booksClient: ClientProxy) {}

  addBooks(book: BookDto): Observable<BookDto> {
    this.logger.log('Payload coming here', book);
    return this.booksClient.send(BOOKS_PATTERN.ADD_BOOK, { ...book });
  }
}
