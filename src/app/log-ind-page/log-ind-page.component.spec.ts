import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogIndPageComponent } from './log-ind-page.component';

describe('LogIndPageComponent', () => {
  let component: LogIndPageComponent;
  let fixture: ComponentFixture<LogIndPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogIndPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogIndPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
