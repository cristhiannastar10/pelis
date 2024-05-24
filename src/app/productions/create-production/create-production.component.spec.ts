import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { of } from 'rxjs';

import { CreateProductionComponent } from './create-production.component';
import { ProductionService } from '../productions.service';
import { Production } from '../productions';

describe('CreateProductionComponent', () => {
  let component: CreateProductionComponent;
  let fixture: ComponentFixture<CreateProductionComponent>;
  let formBuilder: FormBuilder;
  let productionServiceSpy: jasmine.SpyObj<ProductionService>;

  beforeEach(async(() => {
    const spyProductionService = jasmine.createSpyObj('ProductionService', ['createProduction']);

    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [CreateProductionComponent],
      providers: [
        FormBuilder,
        { provide: ProductionService, useValue: spyProductionService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductionComponent);
    component = fixture.componentInstance;
    productionServiceSpy = TestBed.inject(ProductionService) as jasmine.SpyObj<ProductionService>;
    formBuilder = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize productionForm with empty values', () => {
    component.ngOnInit();
    expect(component.productionForm.value).toEqual({
      title: '',
      poster: '',
      genre: '',
    });
  });

  it('should call createProduction on submit', () => {
    const production = new Production('Test Title', null);
    component.productionForm.setValue({
      title: production.title,
      poster: production.poster,
      genre: 'Action'
    });

    productionServiceSpy.createProduction.and.returnValue(of(new Production('Test Title', null)));

    component.createProduction(production);

    expect(productionServiceSpy.createProduction).toHaveBeenCalledWith(production);
  });
});
