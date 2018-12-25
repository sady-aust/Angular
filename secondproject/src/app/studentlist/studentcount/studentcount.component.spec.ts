import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcountComponent } from './studentcount.component';

describe('StudentcountComponent', () => {
  let component: StudentcountComponent;
  let fixture: ComponentFixture<StudentcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
