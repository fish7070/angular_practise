import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from '../_type/book.Interface';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{


  createDb() {
    const books: Book[] = [
        {
            "id": 1,
            "title": "百年孤獨",
            "author": "加西亞·馬爾克斯",
            "publishDate": "1967-09-01"
        },
        {
            "id": 2,
            "title": "活著",
            "author": "余華",
            "publishDate": "1997-05-01"
        },
        {
            "id": 3,
            "title": "動物農莊",
            "author": "喬治·奧威爾",
            "publishDate": "1945-08-17"
        },
        {
            "id": 4,
            "title": "納尼亞傳奇",
            "author": "C.S. 路易斯",
            "publishDate": "1950-10-16"
        },
        {
            "id": 5,
            "title": "哈利波特：神秘的魔法石",
            "author": "J.K. 羅琳",
            "publishDate": "1997-06-26"
        },
        {
            "id": 6,
            "title": "魔戒：魔戒現身",
            "author": "J.R.R. 托爾金",
            "publishDate": "1954-07-29"
        },
        {
            "id": 7,
            "title": "1984",
            "author": "喬治·奧威爾",
            "publishDate": "1949-06-08"
        },
        {
            "id": 8,
            "title": "達文西密碼",
            "author": "丹·布朗",
            "publishDate": "2003-04-01"
        },
        {
            "id": 9,
            "title": "尋找失去的時間",
            "author": "馬塞爾·普魯斯特",
            "publishDate": "1913-11-14"
        },
        {
            "id": 10,
            "title": "傲慢與偏見",
            "author": "珍·奧斯汀",
            "publishDate": "1813-01-28"
        }
    ]

    return {books};
  }

  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(books => books.id)) + 1 : 11;
  }

  constructor() { }
}