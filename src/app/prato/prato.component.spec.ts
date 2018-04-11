import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { pratoComponent } from './prato.component';

describe('PratoComponent', () => {
  let component: pratoComponent;
  let fixture: ComponentFixture<pratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [pratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(pratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
