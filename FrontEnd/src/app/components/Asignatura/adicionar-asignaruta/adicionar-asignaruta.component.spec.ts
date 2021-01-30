import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAsignarutaComponent } from './adicionar-asignaruta.component';

describe('AdicionarAsignarutaComponent', () => {
  let component: AdicionarAsignarutaComponent;
  let fixture: ComponentFixture<AdicionarAsignarutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarAsignarutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarAsignarutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
