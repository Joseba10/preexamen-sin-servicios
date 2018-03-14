import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilerventasComponent } from './alquilerventas.component';

describe('AlquilerventasComponent', () => {
  let component: AlquilerventasComponent;
  let fixture: ComponentFixture<AlquilerventasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquilerventasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquilerventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
