import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';
import { LoaderService } from '../../services/loader.service';
import { of } from 'rxjs';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  const loaderService: Partial<LoaderService> = {
    show$: of(false) 
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderComponent],
      providers: [
        {
          provide: LoaderService,
          useValue: loaderService
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
