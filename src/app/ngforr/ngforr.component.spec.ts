import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforrComponent } from './ngforr.component';

describe('NgforrComponent', () => {
  let component: NgforrComponent;
  let fixture: ComponentFixture<NgforrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
