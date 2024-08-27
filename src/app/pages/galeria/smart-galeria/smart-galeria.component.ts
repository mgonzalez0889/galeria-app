import {Component, inject, OnInit} from '@angular/core';
import {ListGaleriaComponent} from "../list-galeria/list-galeria.component";
import {GaleriaService} from "../../../services/galeria.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {InterfaceGaleria} from "../../../interfaces/interface-galeria";

@Component({
  selector: 'app-smart-galeria',
  standalone: true,
  imports: [
    ListGaleriaComponent
  ],
  templateUrl: './smart-galeria.component.html',
  styleUrl: './smart-galeria.component.scss'
})
export class SmartGaleriaComponent implements  OnInit{
  public galeriaService = inject(GaleriaService);
  public increment: number = 1;

  public galeria: InterfaceGaleria[] = [];

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    const page: number = 1;
    this.galeriaService.listadoGaleria(page).subscribe((galeria) => {
      this.galeria = galeria;
    })
  }

  searchTerm: string = '';

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value.trim().toLowerCase();
  }

  onIncrement() {
    this.increment = this.increment + 1;
    this.galeriaService.listadoGaleria(this.increment).subscribe((galeria) => {
      this.galeria = galeria;
    })
  }

  onDecrement() {
    if (this.increment > 1) {
      this.increment = this.increment - 1;
      this.galeriaService.listadoGaleria(this.increment).subscribe((galeria) => {
        this.galeria = galeria;
      })
    }

  }


}
