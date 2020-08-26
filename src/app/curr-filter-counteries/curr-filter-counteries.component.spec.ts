import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrFilterCounteriesComponent } from './curr-filter-counteries.component';

describe('CurrFilterCounteriesComponent', () => {
  let component: CurrFilterCounteriesComponent;
  let fixture: ComponentFixture<CurrFilterCounteriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrFilterCounteriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrFilterCounteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
