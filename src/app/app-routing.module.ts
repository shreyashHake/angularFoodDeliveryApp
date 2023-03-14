import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './myComponents/about-us/about-us.component';
import { CustomerComponent } from './myComponents/customer/customer.component';
import { HomeComponent } from './myComponents/home/home.component';
import { OrdersComponent } from './myComponents/orders/orders.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'aboutUs', component: AboutUsComponent},
  {path:'orders', component: OrdersComponent},
  {path:'customer', component: CustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
