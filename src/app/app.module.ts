import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationInterceptor } from './interceptors/authentication-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UnsplashTopicService } from './services/unsplash-topic.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationInterceptor,
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useExisting: AuthenticationInterceptor
    },
    UnsplashTopicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
