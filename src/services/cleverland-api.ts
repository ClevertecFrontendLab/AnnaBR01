import axios from 'axios';

import { IBook, IBookDetails, ICategory } from '../types/types';

enum Endpoint {
  BOOKS = 'books',
  CATEGORIES = 'categories',
  BOOK = 'books/',
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

  public async getDetailsById(id: string) {
    const { data } = await this.API.get<IBookDetails>(`${Endpoint.BOOK}${id}`);

    return data;
  }
}

export const cleverlandAPI = new CleverlandAPI();
