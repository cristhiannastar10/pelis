import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadInfoComponent } from './read-info.component';

describe('ReadInfoComponent', () => {
  let component: ReadInfoComponent;
  let fixture: ComponentFixture<ReadInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
