import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationInterceptor } from './interceptors/authentication-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UnsplashTopicService } from './services/unsplash-topic.service';
import { UnsplashTopicPhotosService } from './services/unsplash-topic-photos.service';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxMasonryModule,
    NgbCarouselModule
  ],
  providers: [
    AuthenticationInterceptor,
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useExisting: AuthenticationInterceptor
    },
    UnsplashTopicService,
    UnsplashTopicPhotosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
