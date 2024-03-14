import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: `./galery.component.html`,
  styleUrl: './galery.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GaleryComponent { }
