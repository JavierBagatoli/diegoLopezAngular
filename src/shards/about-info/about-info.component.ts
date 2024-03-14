import { Component, Input } from '@angular/core';
import { traslateService } from '../../services/information.service';


@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrl: './about-info.component.css',
})
export class AboutInfoComponent {
  texto: string[] = []

  @Input() sidebarVisible: boolean = false;
  
  constructor(
    private _informaticonService: traslateService
  ){
    this.texto = this._informaticonService.getInfo()
  }
 }
