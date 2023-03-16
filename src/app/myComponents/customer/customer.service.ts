import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from './customers';
import { customers } from './mock-customers';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  constructor() { }

  getCustomer(): Observable<Customer[]> {
    return of(customers);
  }

  getCustomero(id: number | string) {
    return this.getCustomer().pipe(
      map((heroes: Customer[]) => heroes.find(customer => customer.id === +id)!)
    );
  }
}
