import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgiffComponent } from './ngiff.component';

describe('NgiffComponent', () => {
  let component: NgiffComponent;
  let fixture: ComponentFixture<NgiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgiffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
