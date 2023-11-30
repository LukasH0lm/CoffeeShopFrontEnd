import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketcomponentComponent } from './basketcomponent.component';

describe('BasketcomponentComponent', () => {
  let component: BasketcomponentComponent;
  let fixture: ComponentFixture<BasketcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasketcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
