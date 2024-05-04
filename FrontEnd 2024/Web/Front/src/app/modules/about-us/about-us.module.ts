import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from 'src/app/pages/about-us/about-us-page/about-us-page.component';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule],
  exports: [AboutUsComponent]
})
export class AboutUsModule { }