import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { TitleServiceAdapter } from 'src/app/adapters/title-service-adapter';
import { FormGroup } from '@angular/forms';
import { RegisterInterface } from './interfaces/register.model';
import { of } from 'rxjs';
import { LoginServiceAdapter } from 'src/app/adapters/login-service.adapter';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let titleServiceMock: Partial<TitleServiceAdapter> = {
    setTitle: () => {}
  }
  let mockRegisterService: Partial<LoginServiceAdapter> = {
    register: () => of(null)
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers: [
        {
          provide: TitleServiceAdapter,
          useValue: titleServiceMock
        },
        {
          provide: LoginServiceAdapter,
          useValue: mockRegisterService
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getDataFromForm should return an object with type RegisterInterface', () => {
    const form: FormGroup = component.register_form;
    form.get('firstName')?.setValue("Raul");
    form.get('lastName')?.setValue("Rodriguez");
    form.get('secondName')?.setValue("Pepin");
    form.get('email')?.setValue("rrodriguez@gmail.com");
    form.get('phoneNamber')?.setValue("112322222");
    form.get('password')?.setValue("123Marin@");
    form.get('confirmPassword')?.setValue("123Marin@");
    const response_test: RegisterInterface = {
      firstName: "Raul",
      lastName: "Rodriguez",
      secondName: "Pepin",
      email: "rrodriguez@gmail.com",
      phoneNamber: "112322222",
      password: "123Marin@",
      confirmPassword: "123Marin@",
    };
    const response: RegisterInterface = component.getDataFromForm(form);
    expect(response).toEqual(response_test);
  });

  it('sendForm should call to register method of register service', () => {
    spyOn(mockRegisterService, 'register' as any);
    component.sendForm();
    expect(mockRegisterService.register).toHaveBeenCalled();
  });
});
