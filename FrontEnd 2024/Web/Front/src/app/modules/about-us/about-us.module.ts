import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from 'src/app/pages/about-us/about-us-page/about-us-page.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, TranslateModule],
  exports: [AboutUsComponent]
})
export class AboutUsModule { }
