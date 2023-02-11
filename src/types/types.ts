export interface IBook {
    id: string;
    image: string[]|[];
    category: string;
    author: string;
    title: string;
    rating: number | string;
    year: number;
    isBooked: boolean;
    bookedTill: string;
  }