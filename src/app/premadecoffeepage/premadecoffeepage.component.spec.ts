import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremadecoffeepageComponent } from './premadecoffeepage.component';

describe('PremadecoffeepageComponent', () => {
  let component: PremadecoffeepageComponent;
  let fixture: ComponentFixture<PremadecoffeepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremadecoffeepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PremadecoffeepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
