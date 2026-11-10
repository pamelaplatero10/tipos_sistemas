import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorPersonalizado } from './error-personalizado';

describe('ErrorPersonalizado', () => {
  let component: ErrorPersonalizado;
  let fixture: ComponentFixture<ErrorPersonalizado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorPersonalizado],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorPersonalizado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
