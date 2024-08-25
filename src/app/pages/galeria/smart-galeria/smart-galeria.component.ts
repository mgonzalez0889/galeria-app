import {Component, inject, OnInit} from '@angular/core';
import {ListGaleriaComponent} from "../list-galeria/list-galeria.component";
import {GaleriaService} from "../../../services/galeria.service";
import {Observable} from "rxjs";
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

  public galeria$: Observable<InterfaceGaleria[]> = new Observable();

  ngOnInit(): void {
    this.galeria$ = this.galeriaService.listadoGaleria();
  }

  searchTerm: string = '';

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value.trim().toLowerCase();
  }


}
