import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockTextComponent } from './mock-text.component';

describe('MockTextComponent', () => {
  let component: MockTextComponent;
  let fixture: ComponentFixture<MockTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MockTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
