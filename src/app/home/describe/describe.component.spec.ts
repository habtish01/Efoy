import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescribeComponent } from './describe.component';

describe('DescribeComponent', () => {
  let component: DescribeComponent;
  let fixture: ComponentFixture<DescribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescribeComponent]
    });
    fixture = TestBed.createComponent(DescribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
