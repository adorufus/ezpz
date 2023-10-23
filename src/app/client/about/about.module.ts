import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesComponent } from './stories/stories.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { VisionComponent } from './vision/vision.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      {
        path: "stories",
        component: StoriesComponent
      },
      {
        path: "vision",
        component: VisionComponent
      }
    ]
  }
]

@NgModule({
  declarations: [StoriesComponent, VisionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class AboutModule { }
