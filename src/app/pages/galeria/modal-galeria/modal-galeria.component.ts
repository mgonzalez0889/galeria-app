import {Component, inject, Input, TemplateRef} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {InterfaceGaleria} from "../../../interfaces/interface-galeria";
import {NgIf, TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-modal-galeria',
  standalone: true,
  imports: [
    TitleCasePipe,
    NgIf
  ],
  templateUrl: './modal-galeria.component.html',
  styleUrl: './modal-galeria.component.scss'
})
export class ModalGaleriaComponent {
  @Input() item!: InterfaceGaleria;
}
