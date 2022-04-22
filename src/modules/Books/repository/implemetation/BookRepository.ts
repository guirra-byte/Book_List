import { Book } from "../../../../model/Book/Book";
import { IBookRepository } from "../IBookRepository";
import { prisma } from "../../../../Prisma/Prisma";

export class BookRepository implements IBookRepository {


  private static INSTANCE: BookRepository

  private constructor() { }

  public static getInstance(): BookRepository {

    if (!BookRepository.INSTANCE) {

      BookRepository.INSTANCE = new BookRepository
    }

    return BookRepository.INSTANCE
  }

  async findOne(bookId: string) {

    const idBook = bookId

    const findOneBook = await prisma.book.findUnique({

      where: { id: idBook },
      include: {

        author: true
      }
    })

    return findOneBook
  }

  async create(bookName: string, pages: number, description: string, name: string, lastName: string, smallDescription: string) {

    const newBook = new Book()

    Object.assign(newBook, {
      bookName,
      description,
      pages
    })

    const createBookInClient = await prisma.book.create({

      data: {

        name,
        description,
        author: {

          create: {

            name,
            lastName,
            smallDescription

          }
        }

      }
    })

    return createBookInClient

  }

  async findAll() {

    const findAllBooks = await prisma.book.findMany({

      include: {

        author: true
      }
    })

    return findAllBooks
  }

  async remove(id: string) {

    const bookId = id
    const findBookAndRemove = await prisma.book.delete({

      where: { id: bookId }
    })

    return findBookAndRemove

  }
}

