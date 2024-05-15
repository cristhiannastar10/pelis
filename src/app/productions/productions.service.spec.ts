import { TestBed } from '@angular/core/testing';
import { ProductionService } from './productions.service';

describe('ProductionService', () => {
  let service: ProductionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
