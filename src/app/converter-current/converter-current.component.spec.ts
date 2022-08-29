import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterCurrentComponent } from './converter-current.component';

describe('ConverterCurrentComponent', () => {
  let component: ConverterCurrentComponent;
  let fixture: ComponentFixture<ConverterCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterCurrentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConverterCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
