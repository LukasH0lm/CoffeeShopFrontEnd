import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediapageComponent } from './socialmediapage.component';

describe('SocialmediapageComponent', () => {
  let component: SocialmediapageComponent;
  let fixture: ComponentFixture<SocialmediapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialmediapageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialmediapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
