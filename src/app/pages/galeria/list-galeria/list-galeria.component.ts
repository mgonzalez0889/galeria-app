import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InterfaceGaleria} from "../../../interfaces/interface-galeria";
import {GaleriaService} from "../../../services/galeria.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-list-galeria',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './list-galeria.component.html',
  styleUrl: './list-galeria.component.scss'
})
export class ListGaleriaComponent implements  OnInit{
  public galeriaService = inject(GaleriaService);

  public galeria$: Observable<InterfaceGaleria[]> = new Observable();

  ngOnInit(): void {
    this.galeria$ = this.galeriaService.listadoGaleria();
  }


}
