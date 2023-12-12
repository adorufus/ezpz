import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  isHidden: boolean = true;
  shouldHideAfterAnimEnd: boolean = false;

  @HostListener("window:scroll", []) onScroll() {
    var scrollPos = window.scrollY

    // console.log("current scroll pos", scrollPos)

    if (scrollPos <= 508.8) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
      this.shouldHideAfterAnimEnd = false;
    }
  }

  @HostListener("animationend", ['$event']) onAnimationEnd() {
    console.log("on animation end:", event)

    if (event instanceof AnimationEvent) {
      if (event?.returnValue) {
        if (event.animationName == "pulseBackCustom") {
          this.shouldHideAfterAnimEnd = true;
        } else {
          this.shouldHideAfterAnimEnd = false;
        }
      } else {
        this.shouldHideAfterAnimEnd = false;
      }
    }
  }

  @HostListener("animationstart", ['$event']) onAnimationStart() {
    if (event instanceof AnimationEvent) {
      // console.log(event)
    }
  }

  // @HostListener('scroll', ['$event'])
  // onScroll(event: any) {
  //   var scrollPos = event.scrollTop();

  //   if(scrollPos <= 0) {
  //     this.isHidden = true;
  //   } else {
  //     this.isHidden = false;
  //   }
  // }

  ngOnInit(): void {

  }



}
