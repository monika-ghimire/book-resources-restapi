import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/data.dto";


@Controller('book')
export class BookController {

    constructor(private bookService: BookService) {

    }


    // find allbook
    @Get('/findall')
    getAllBooks(): Book[] {
        return this.bookService.findAllBook();
    }

    @Put('/update')
    updatedBooks(@Body() book: Book): string {
        return this.bookService.updateBookService(book);
    }


    @Delete('/delete/:id')
    deleteBooks(@Param('id') bookID: string): string {
        return this.bookService.deleteBookService(bookID);
    }


    @Post('/add')
    addBooks(@Body() book: Book): string {
        return this.bookService.addBookService(book);
    }




}