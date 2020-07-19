import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TagComponent } from './components/tag/tag.component';

@NgModule({
  declarations: [TagComponent],
  imports: [CommonModule],
  exports: [TagComponent],
})
export class TagModule {}
