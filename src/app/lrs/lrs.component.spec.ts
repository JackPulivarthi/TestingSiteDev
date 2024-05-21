import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LrsComponent } from './lrs.component';

describe('LrsComponent', () => {
  let component: LrsComponent;
  let fixture: ComponentFixture<LrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
