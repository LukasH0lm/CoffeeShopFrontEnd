import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeselectionpageComponent } from './coffeeselectionpage.component';

describe('CoffeeselectionpageComponent', () => {
  let component: CoffeeselectionpageComponent;
  let fixture: ComponentFixture<CoffeeselectionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeselectionpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeselectionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
