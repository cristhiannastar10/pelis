import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadProductionComponent } from './read-production.component';

describe('ReadProductionComponent', () => {
  let component: ReadProductionComponent;
  let fixture: ComponentFixture<ReadProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadProductionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
