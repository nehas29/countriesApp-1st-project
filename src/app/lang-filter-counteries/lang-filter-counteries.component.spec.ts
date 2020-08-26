import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangFilterCounteriesComponent } from './lang-filter-counteries.component';

describe('LangFilterCounteriesComponent', () => {
  let component: LangFilterCounteriesComponent;
  let fixture: ComponentFixture<LangFilterCounteriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangFilterCounteriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangFilterCounteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
