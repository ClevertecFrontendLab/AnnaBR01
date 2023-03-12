import axios, { AxiosRequestConfig } from 'axios';

import {
  IAuthUsrerRequest,
  IBook,
  IBookDetails,
  ICategory,
  IForgotPasswordRequest,
  IRegistrationUsrerRequest,
  IResetPasswordRequest,
} from '../types/types';

enum Endpoint {
  BOOKS = 'books',
  CATEGORIES = 'categories',
  BOOK = 'books/',
  REGISTRATION = 'auth/local/register',
  AUTH = 'auth/local',
  FORGOT_PASSWORD = 'auth/forgot-password',
  RESET_PASSWORD = 'auth/reset-password',
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

  public async forgotPassword(body: IForgotPasswordRequest) {
    const { data } = await this.API.post(Endpoint.FORGOT_PASSWORD, body);

    return data;
  }

  public async resetPassword(body: IResetPasswordRequest) {
    const { data } = await this.API.post(Endpoint.RESET_PASSWORD, body);

    return data;
  }
}

export const cleverlandAPI = new CleverlandAPI();
