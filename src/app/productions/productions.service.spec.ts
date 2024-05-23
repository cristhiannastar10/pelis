import { TestBed } from '@angular/core/testing';
import { ProductionService } from './productions.service'; 
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject } from '@angular/core/testing';

describe('ProductionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductionService]
    });
  });

  it('should be created', inject([ProductionService], (service: ProductionService) => {
    expect(service).toBeTruthy();
  }));
});

