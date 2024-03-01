import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { TitleServiceAdapter } from 'src/app/adapters/title-service-adapter';
import { LoaderService } from 'src/app/core/shared/services/loader.service';
import { LoginService } from 'src/app/services/login.service';
import { of } from 'rxjs';
import { AlertServiceImplement } from 'src/app/adapters/alert-service.adapter';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let titleServiceMock: Partial<TitleServiceAdapter> = {
    setTitle: () => {}
  }
  let loaderServiceMock: Partial<LoaderService> = {
    showValue: false
  }
  let loginServiceMock: Partial<LoginService> = {
    login: () => of(null)
  }
  let alertService: Partial<AlertServiceImplement> = {
    showToast: () => of(null)
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        {
          provide: TitleServiceAdapter,
          useValue: titleServiceMock
        },
        {
          provide: LoaderService,
          useValue: loaderServiceMock
        },
        {
          provide: LoginService,
          useValue: loginServiceMock
        },
        {
          provide: AlertServiceImplement,
          useValue: alertService
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});