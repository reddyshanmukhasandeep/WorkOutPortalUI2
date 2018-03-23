import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkouthomeComponent } from './workouthome.component';

describe('WorkouthomeComponent', () => {
  let component: WorkouthomeComponent;
  let fixture: ComponentFixture<WorkouthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkouthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkouthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
