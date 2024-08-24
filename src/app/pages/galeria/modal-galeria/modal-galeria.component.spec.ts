import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGaleriaComponent } from './modal-galeria.component';

describe('ModalGaleriaComponent', () => {
  let component: ModalGaleriaComponent;
  let fixture: ComponentFixture<ModalGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalGaleriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
