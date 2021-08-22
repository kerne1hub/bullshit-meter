import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleRateTranslationPipe } from './article-rate-translation.pipe';
import { TranslatePipe } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ArticleRateTranslationPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TranslatePipe
  ],
  exports: [
    ArticleRateTranslationPipe
  ]
})
export class ArticleRateTranslationModule { }
