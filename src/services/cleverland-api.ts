import axios from 'axios';

import { IBook, ICategory } from '../types/types';

enum Endpoint {
  BOOKS = 'books',
  CATEGORIES = 'categories',
}

class CleverlandAPI {
  private readonly API = axios.create({
    baseURL: 'https://strapi.cleverland.by/api/',
  });

  public async getBooks() {
    const { data } = await this.API.get<IBook[]>(Endpoint.BOOKS);

    return data;
  }

  public async getCategories() {
    const { data } = await this.API.get<ICategory[]>(Endpoint.CATEGORIES);

    return data;
  }

  // public async getDetailsByIsbn13(isbn13: string) {
  //   const { data } = await this.API.get<IBookDetails>(`${Endpoint.BOOK}${isbn13}`);

  //   return data;
  // }
}

export const cleverlandAPI = new CleverlandAPI();
