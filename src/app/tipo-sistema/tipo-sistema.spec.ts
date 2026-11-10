import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoSistema } from './tipo-sistema';

describe('TipoSistema', () => {
  let component: TipoSistema;
  let fixture: ComponentFixture<TipoSistema>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoSistema],
    }).compileComponents();

    fixture = TestBed.createComponent(TipoSistema);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
