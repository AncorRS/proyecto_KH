import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVacacionesComponent } from './lista-vacaciones.component';

describe('ListaVacacionesComponent', () => {
  let component: ListaVacacionesComponent;
  let fixture: ComponentFixture<ListaVacacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVacacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVacacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
