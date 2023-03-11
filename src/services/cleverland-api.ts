import axios from 'axios';

import { IAuthUsrerRequest, IBook, IBookDetails, ICategory, IRegistrationUsrerRequest } from '../types/types';

enum Endpoint {
  BOOKS = 'books',
  CATEGORIES = 'categories',
  BOOK = 'books/',
  REGISTRATION = 'auth/local/register',
  AUTH = 'auth/local',
}

class CleverlandAPI {
  private readonly API = axios.create({
    baseURL: 'https://strapi.cleverland.by/api/',
  });

  public async getBooks() {
    const { data } = await this.API.get<IBook[]>(Endpoint.BOOKS, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return data;
  }

  public async getCategories() {
    const { data } = await this.API.get<ICategory[]>(Endpoint.CATEGORIES, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return data;
  }

  public async getDetailsById(id: string) {
    const { data } = await this.API.get<IBookDetails>(`${Endpoint.BOOK}${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return data;
  }

  public async registrationUser(body: IRegistrationUsrerRequest) {
    const { data } = await this.API.post(Endpoint.REGISTRATION, body);

    return data;
  }

  public async authUser(body: IAuthUsrerRequest) {
    const { data } = await this.API.post(Endpoint.AUTH, body);

    return data;
  }
}

export const cleverlandAPI = new CleverlandAPI();

// axios.interceptors.request.use((config) => {
//   // eslint-disable-next-line no-param-reassign
//   if (localStorage.getItem('token')) config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

//   return config;
// });
