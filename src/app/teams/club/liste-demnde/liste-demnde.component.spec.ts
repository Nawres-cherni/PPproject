import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemndeComponent } from './liste-demnde.component';

describe('ListeDemndeComponent', () => {
  let component: ListeDemndeComponent;
  let fixture: ComponentFixture<ListeDemndeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDemndeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDemndeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
