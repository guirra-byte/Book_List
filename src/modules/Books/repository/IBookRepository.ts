import { Book } from "../../../model/Book/Book"

export interface IBookRepository {

  create(bookName: string, pages: number, description: string, author: string, name: string, lastName: string, smalldescription: string): any
  findOne(id: string): any
  findAll(): any
  remove(name: string): any

}