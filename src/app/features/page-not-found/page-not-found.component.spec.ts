import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { LoginServiceAdapter } from 'src/app/adapters/login-service.adapter';
import { of } from 'rxjs';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let loginServiceAdapterMock: Partial<LoginServiceAdapter> = {
    login: () => of()
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ],
      providers: [
        {
          provide: LoginServiceAdapter,
          useValue: loginServiceAdapterMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
