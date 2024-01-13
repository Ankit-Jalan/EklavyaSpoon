import { TestBed } from '@angular/core/testing';

import { BestProductsService } from './best-products.service';

describe('BestProductsServiceService', () => {
  let service: BestProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
