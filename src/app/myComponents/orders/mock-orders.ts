import { Order } from "./orders";

export const orders: Order[] = [
  { id: 1, customerId: 1, orderDate: new Date('2022-03-15'), totalAmount: 100, products: ['Product A', 'Product B'] },
  { id: 2, customerId: 2, orderDate: new Date('2022-03-14'), totalAmount: 200, products: ['Product C', 'Product D'] },
];

