import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcoffeepageComponent } from './customcoffeepage.component';

describe('CustomcoffeepageComponent', () => {
  let component: CustomcoffeepageComponent;
  let fixture: ComponentFixture<CustomcoffeepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomcoffeepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomcoffeepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
