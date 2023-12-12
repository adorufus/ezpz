import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.scss']
})
export class OurProductsComponent implements OnInit {
  type: string = "bodywash"
  constructor(private activeRoute: ActivatedRoute) {

  }

  tabChanger(type: string) {
    this.type = type
  }
  
  ngOnInit(): void {
      this.activeRoute.queryParams.subscribe(paths => {
        this.type = paths['type']
      })
  }
}
