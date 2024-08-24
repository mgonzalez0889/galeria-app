import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InterfaceGaleria} from "../../../interfaces/interface-galeria";
import {GaleriaService} from "../../../services/galeria.service";

@Component({
  selector: 'app-list-galeria',
  standalone: true,
  imports: [],
  templateUrl: './list-galeria.component.html',
  styleUrl: './list-galeria.component.scss'
})
export class ListGaleriaComponent implements  OnInit{
  public galeriaService = inject(GaleriaService);

  ngOnInit(): void {
    this.galeriaService.listadoGaleria().subscribe(console.log)
  }


}
