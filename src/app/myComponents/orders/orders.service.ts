import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from './orders';
import { orders } from './mock-orders';


@Injectable({
  providedIn: 'root',
})
export class OrderService {

  constructor() { }

  getHeroes(): Observable<Order[]> {
    return of(orders);
  }

  getHero(id: number | string) {
    return this.getHeroes().pipe(
      map((heroes: Order[]) => heroes.find(order => order.id === +id)!)
    );
  }
}
