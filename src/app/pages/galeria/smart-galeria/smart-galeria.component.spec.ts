import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartGaleriaComponent } from './smart-galeria.component';

describe('SmartGaleriaComponent', () => {
  let component: SmartGaleriaComponent;
  let fixture: ComponentFixture<SmartGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartGaleriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
