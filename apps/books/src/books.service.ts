import { Injectable } from '@nestjs/common';
import BookDto from '@app/contracts/books/book.dto';

@Injectable()
export class BooksService {
  readonly books: BookDto[] = [];

  addBook(book: BookDto) {
    this.books.push(book);
    return this.books;
  }
}
