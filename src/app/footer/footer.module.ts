import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [AuthorComponent],
  imports: [CommonModule],
  exports: [AuthorComponent],
})
export class FooterModule {}
