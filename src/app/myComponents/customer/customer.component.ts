import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { CustomerService } from './customer.service';
import { Customer } from './customers';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {

  customers$!: Observable<Customer[]>;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.customers$ = this.route.paramMap.pipe(
    //   switchMap((params: { get: (arg0: string) => string; }) => {
    //     this.selectedId = parseInt(params.get('id')!, 10);
    //     return this.service.getCustomer();
    //   })
    // );
  }
}
