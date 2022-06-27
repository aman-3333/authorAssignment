
import Book, { IBook } from "../models/Book";


import { ObjectId } from "mongoose";




export default class BookController {

   

   
    public async createBook(body: IBook) {
        let BookInfo: IBook;
        BookInfo = await Book.create(body);

        return BookInfo;
    }


    public async editBook(body: IBook, BookId: string) {
     
        const BookInfo: IBook = await Book.findOneAndUpdate({ _id: BookId, authorId: body.authorId, isDeleted: false }, body, { new: true }).lean();
        return BookInfo;

    }


    public async getBook() {
        const BookList: IBook[] = await Book.find({ isDeleted: false });
        return BookList;
    }

    public async getBookInfoById(BookId: string) {
        const BookInfo: IBook = await Book.findOne({ _id: BookId, isDeleted: false }).lean();
        return BookInfo;
    }

    public async deleteBook(BookId: string, authorId: any) {
   

        const BookInfo: IBook = await Book.findOneAndUpdate({ _id: BookId, authorId: authorId, isDeleted: false }, { $set: { isDeleted: true } }).lean()
        return BookInfo;


    }
}
  