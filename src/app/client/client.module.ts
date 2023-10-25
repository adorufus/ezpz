import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { StoriesComponent } from './about/stories/stories.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { SkinsightComponent } from './skinsight/skinsight.component';

const routes: Routes = [
  {
    path: "",
    component: ProductsComponent
  },
  {
    path: "about",
    loadChildren: () => import("./about/about.module").then(m => m.AboutModule),
  },
  {
    path: "our-products",
    component: OurProductsComponent
  },
  {
    path: "skinsight",
    component: SkinsightComponent
  }
]

@NgModule({
  declarations: [ClientComponent, NavbarComponent, ProductsComponent, AboutComponent, OurProductsComponent, SkinsightComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ClientModule { }
