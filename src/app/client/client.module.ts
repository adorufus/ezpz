import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: "",
    component: ProductsComponent
  }
]

@NgModule({
  declarations: [ClientComponent, NavbarComponent, ProductsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ClientModule { }
