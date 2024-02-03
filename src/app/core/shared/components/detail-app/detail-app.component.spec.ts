import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAppComponent } from './detail-app.component';

describe('DetailAppComponent', () => {
  let component: DetailAppComponent;
  let fixture: ComponentFixture<DetailAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
