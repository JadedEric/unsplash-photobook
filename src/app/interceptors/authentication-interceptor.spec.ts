import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockBuilder, MockRender, NG_MOCKS_INTERCEPTORS, ngMocks } from 'ng-mocks';
import { environment } from 'src/environments/environment';
import { AppModule } from '../app.module';
import { AuthenticationInterceptor } from './authentication-interceptor';

describe('AuthenticationInterceptor', () => {

  beforeEach(() => {
    return MockBuilder(AuthenticationInterceptor, AppModule)
      .exclude(NG_MOCKS_INTERCEPTORS)
      .keep(HTTP_INTERCEPTORS)
      .replace(HttpClientModule, HttpClientTestingModule);
  });

  it(`triggers the interceptor with an Accept-Version equal to ${environment.acceptVersion}`, () => {
    MockRender();

    const client = ngMocks.findInstance(HttpClient);
    const httpMock = ngMocks.findInstance(HttpTestingController);

    client.get('/api').subscribe();

    const req = httpMock.expectOne('/api');
    req.flush('');
    httpMock.verify();

    expect(req.request.headers.get('Accept-Version')).toEqual(environment.acceptVersion);
  });

  it(`triggers the interceptor with Authorization equal to Client-ID`, () => {
    MockRender();

    const client = ngMocks.findInstance(HttpClient);
    const httpMock = ngMocks.findInstance(HttpTestingController);

    client.get('/api').subscribe();

    const req = httpMock.expectOne('/api');
    req.flush('');
    httpMock.verify();

    expect(req.request.headers.get('Accept-Version')).toEqual(environment.acceptVersion);
  });
});
