import { Injectable } from "@nestjs/common";
import { Book } from "./data/data.dto";
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class BookService {
    public books: Book[] = [];


    //add book 
    addBookService(book: Book): string {

        book.id = uuidv4(); //generate unique id for each book
        this.books.push(book);
        return 'book has been added sucessfully'
        // return book;
    }
    //update
    updateBookService(book: Book): string {
        let index = this.books.findIndex((currentbook) => {
            return currentbook.id == book.id;
        })

        this.books[index] = book;
        return 'book has been updated.'

    }


    //delete
    deleteBookService(bookid: string): string {
        this.books = this.books.filter((book) => {
            return book.id != bookid;
        })


        return 'book has been deleted'

    }
    //findall
    findAllBook(): Book[] {
        return this.books;
    }
}