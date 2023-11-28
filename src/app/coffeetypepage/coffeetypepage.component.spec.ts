import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeetypepageComponent } from './coffeetypepage.component';

describe('CoffeetypepageComponent', () => {
  let component: CoffeetypepageComponent;
  let fixture: ComponentFixture<CoffeetypepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeetypepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeetypepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
