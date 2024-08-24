import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGaleriaComponent } from './list-galeria.component';

describe('ListGaleriaComponent', () => {
  let component: ListGaleriaComponent;
  let fixture: ComponentFixture<ListGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGaleriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
