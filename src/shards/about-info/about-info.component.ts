import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { traslateService } from '../../services/information.service';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrl: './about-info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutInfoComponent {
  texto: string[] = []

  constructor(
    private _informaticonService: traslateService
  ){
    this.texto = this._informaticonService.getInfo()
  }

  
 }
