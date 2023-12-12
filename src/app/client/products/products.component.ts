import { Component, Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private router: Router) {

  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoHeight: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 13
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      1300: {
        items: 1
      }
    },
    nav: false
  }

  navigateToProductsPage(type: string): void {
    this.router.navigate(['/our-products'], {
      queryParams: {
        type: type
      }
    })
  }

  ngOnInit(): void {
    initFlowbite()
  }
}

@Directive({
  selector: '[appFollowCursor]'
})
export class FollowCursorDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // Position the image at the initial mouse cursor position
    this.positionImageAtCursor();
  }



  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Update image position on mouse movement
    this.positionImage(event.clientX, event.clientY);
  }

  private positionImageAtCursor() {
    const imageElement = this.el.nativeElement;
    const imageWidth = imageElement.width;
    const imageHeight = imageElement.height;
    const offsetX = imageWidth / 2; // Adjust the offset to the center of the image
    const offsetY = imageHeight / 2;

    this.renderer.setStyle(imageElement, 'position', 'fixed');
    this.renderer.setStyle(imageElement, 'top', (window.innerHeight / 2 - offsetY) + 'px');
    this.renderer.setStyle(imageElement, 'left', (window.innerWidth / 2 - offsetX) + 'px');
  }

  private positionImage(x: number, y: number) {
    const imageElement = this.el.nativeElement;
    const offsetX = imageElement.width / 2;
    const offsetY = imageElement.height / 2;

    this.renderer.setStyle(imageElement, 'top', (y - offsetY) + 'px');
    this.renderer.setStyle(imageElement, 'left', (x - offsetX) + 'px');
  }
}
