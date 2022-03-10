import { TestBed } from '@angular/core/testing';

import { HttpClientInterceptor } from './http-client-interceptor.service';

describe('HttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpClientInterceptor = TestBed.get(HttpClientInterceptor);
    expect(service).toBeTruthy();
  });
});
